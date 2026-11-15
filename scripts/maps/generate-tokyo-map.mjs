// 東京都の区市町村地図（本土・23区拡大）をCODHの境界データから生成する。
//
// 使い方:
//   curl -o 13_city_dc.i.topojson \
//     https://geoshape.ex.nii.ac.jp/city/topojson/20230101/13/13_city_dc.i.topojson
//   node scripts/maps/generate-tokyo-map.mjs 13_city_dc.i.topojson
//
// web/public/img/ に SVG を2枚書き出し、各区市町村の点の位置（%）を
// JSON で標準出力に出す。点の位置は municipalities.ts に反映する。
import { readFileSync, writeFileSync } from "node:fs";

const SOURCE =
  "Based on Historical Administrative Areas Dataset beta (CODH), 2023-01-01. CC BY 4.0. https://geoshape.ex.nii.ac.jp/city/choropleth/13_city_dc.html doi:10.20676/00000447. Projected and labeled for this site.";
const WIDTH = 800;
const PADDING = 24;
const COS_LAT = Math.cos((35.7 * Math.PI) / 180);

const topology = JSON.parse(readFileSync(process.argv[2], "utf8"));
const { scale, translate } = topology.transform;

const arcs = topology.arcs.map((arc) => {
  let x = 0;
  let y = 0;
  return arc.map(([dx, dy]) => {
    x += dx;
    y += dy;
    return [x * scale[0] + translate[0], y * scale[1] + translate[1]];
  });
});

function ring(indexes) {
  const points = [];
  for (const index of indexes) {
    const arc = index >= 0 ? arcs[index] : [...arcs[~index]].reverse();
    points.push(...(points.length ? arc.slice(1) : arc));
  }
  return points;
}

const features = topology.objects.city.geometries.map((geometry) => ({
  code: geometry.properties.N03_007,
  name: geometry.properties.N03_004 ?? "",
  polygons: geometry.arcs.map((polygon) => polygon.map(ring)),
}));

const isWard = (code) => code >= "13101" && code <= "13123";
const isTama = (code) => code >= "13201" && code <= "13308";
// 荒川河口部・中央防波堤外側・所属未定地（23区に囲まれた区域）
const isBayArea = (code) => ["13805", "13807", "13808"].includes(code);

function ringArea(points) {
  let area = 0;
  for (let i = 0, j = points.length - 1; i < points.length; j = i++) {
    area += points[j][0] * points[i][1] - points[i][0] * points[j][1];
  }
  return area / 2;
}

function contains(points, [x, y]) {
  let inside = false;
  for (let i = 0, j = points.length - 1; i < points.length; j = i++) {
    const [xi, yi] = points[i];
    const [xj, yj] = points[j];
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) {
      inside = !inside;
    }
  }
  return inside;
}

// 最大の島（外周）の重心。外れる形のときは重心の高さで最も広い内側区間の中点。
function labelPoint(polygons) {
  const outer = polygons
    .map((polygon) => polygon[0])
    .sort((a, b) => Math.abs(ringArea(b)) - Math.abs(ringArea(a)))[0];
  const area = ringArea(outer);
  let cx = 0;
  let cy = 0;
  for (let i = 0, j = outer.length - 1; i < outer.length; j = i++) {
    const cross = outer[j][0] * outer[i][1] - outer[i][0] * outer[j][1];
    cx += (outer[j][0] + outer[i][0]) * cross;
    cy += (outer[j][1] + outer[i][1]) * cross;
  }
  const centroid = [cx / (6 * area), cy / (6 * area)];
  if (contains(outer, centroid)) return centroid;
  const crossings = [];
  for (let i = 0, j = outer.length - 1; i < outer.length; j = i++) {
    const [xi, yi] = outer[i];
    const [xj, yj] = outer[j];
    if (yi > centroid[1] !== yj > centroid[1]) {
      crossings.push(((xj - xi) * (centroid[1] - yi)) / (yj - yi) + xi);
    }
  }
  crossings.sort((a, b) => a - b);
  let best = [centroid[0], centroid[1]];
  let widest = 0;
  for (let i = 0; i + 1 < crossings.length; i += 2) {
    if (crossings[i + 1] - crossings[i] > widest) {
      widest = crossings[i + 1] - crossings[i];
      best = [(crossings[i] + crossings[i + 1]) / 2, centroid[1]];
    }
  }
  return best;
}

function createProjection(fitFeatures) {
  const points = fitFeatures.flatMap((f) => f.polygons.flat(2));
  const xs = points.map(([lon]) => lon * COS_LAT);
  const ys = points.map(([, lat]) => -lat);
  const minX = Math.min(...xs);
  const minY = Math.min(...ys);
  const k = (WIDTH - PADDING * 2) / (Math.max(...xs) - minX);
  const height = Math.ceil((Math.max(...ys) - minY) * k + PADDING * 2);
  const project = ([lon, lat]) => [
    (lon * COS_LAT - minX) * k + PADDING,
    (-lat - minY) * k + PADDING,
  ];
  return { project, height };
}

const fmt = (n) => n.toFixed(1);

function pathData(polygons, project) {
  return polygons
    .flat()
    .map(
      (points) =>
        "M" +
        points
          .map(project)
          .map(([x, y]) => fmt(x) + "," + fmt(y))
          .join("L") +
        "Z"
    )
    .join("");
}

// 密集して重なる市名だけ、文字の位置（点は動かさない）をずらす。
const LABEL_NUDGE = {
  武蔵村山市: [-14, 0],
  東大和市: [12, 0],
  東村山市: [0, -28],
  国分寺市: [-6, 0],
  小金井市: [8, 0],
};

// gap: 点（地図上に重ねるボタン）と名前が重ならないよう、点の中心から名前までを空ける。
function label(text, [x, y], size, gap = 4) {
  const [dx, dy] = LABEL_NUDGE[text] ?? [0, 0];
  return `<text x="${fmt(x + dx)}" y="${fmt(y + size + gap + dy)}" font-size="${size}" font-family="sans-serif" text-anchor="middle" fill="black" stroke="white" stroke-width="3" paint-order="stroke">${text}</text>`;
}

function renderMap({
  title,
  drawn,
  fit,
  labeled,
  labelSize,
  labelGap,
  shadeWards = false,
  extra = () => "",
}) {
  const { project, height } = createProjection(fit);
  const positions = {};
  const shapes = drawn.map((f) => {
    const fill = isBayArea(f.code)
      ? "#e5e7eb"
      : shadeWards && isWard(f.code)
        ? "#dbe7f3"
        : "white";
    return `<path d="${pathData(f.polygons, project)}" fill="${fill}" stroke="gray" stroke-width="${shadeWards && isWard(f.code) ? 0.6 : 1.2}" fill-rule="evenodd"/>`;
  });
  const labels = labeled.map((f) => {
    const point = project(labelPoint(f.polygons));
    positions[f.name] = {
      mapX: Number(((point[0] / WIDTH) * 100).toFixed(1)),
      mapY: Number(((point[1] / height) * 100).toFixed(1)),
    };
    return label(f.name, point, labelSize, labelGap);
  });
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${WIDTH} ${height}" role="img"><title>${title}</title><metadata>${SOURCE}</metadata>${shapes.join("")}${extra(project)}${labels.join("")}</svg>\n`;
  return { svg, positions, height };
}

const wards = features.filter((f) => isWard(f.code));
const tama = features.filter((f) => isTama(f.code));
const bay = features.filter((f) => isBayArea(f.code));

const mainland = renderMap({
  title: "東京都の多摩地域と23区の境界図",
  drawn: [...wards, ...tama, ...bay],
  fit: [...wards, ...tama],
  labeled: tama,
  labelSize: 10,
  labelGap: 9,
  shadeWards: true,
  extra: (project) => {
    const pts = wards.flatMap((f) => f.polygons.flat(2)).map(project);
    const xs = pts.map(([x]) => x);
    const ys = pts.map(([, y]) => y);
    const center = [
      (Math.min(...xs) + Math.max(...xs)) / 2 + 20,
      (Math.min(...ys) + Math.max(...ys)) / 2 - 20,
    ];
    return label("23区", center, 16) + label("（下の拡大図）", [center[0], center[1] + 20], 11);
  },
});

const wardMap = renderMap({
  title: "東京23区の境界図",
  drawn: [...wards, ...bay],
  fit: wards,
  labeled: wards,
  labelSize: 16,
  labelGap: 16,
});

writeFileSync("web/public/img/tokyo-mainland-map.svg", mainland.svg);
writeFileSync("web/public/img/tokyo-23-wards-map.svg", wardMap.svg);
console.log(
  JSON.stringify(
    {
      mainlandHeight: mainland.height,
      wardsHeight: wardMap.height,
      positions: { ...mainland.positions, ...wardMap.positions },
    },
    null,
    2
  )
);
