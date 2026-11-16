// 都道府県の市町村地図をCODHの境界データから生成する。
//
// 使い方:
//   curl -o 10_city_dc.i.topojson \
//     https://geoshape.ex.nii.ac.jp/city/topojson/20230101/10/10_city_dc.i.topojson
//   node scripts/maps/generate-prefecture-map.mjs gunma 10_city_dc.i.topojson [--apply]
//
// web/public/img/<slug>-municipality-map.svg を書き出し、各市町村の点の位置（%）を
// JSON で標準出力に出す。--apply を付けると municipalities.ts の mapX/mapY も更新する。
import { readFileSync, writeFileSync } from "node:fs";

const MAX_WIDTH = 800;
const PADDING = 24;

// 離島が遠い県は、本土の外側に別枠（inset）として描く。
const PREFECTURES = {
  aichi: { code: "23", name: "愛知県", labelSize: 11 },
  chiba: { code: "12", name: "千葉県", labelSize: 11 },
  fukuoka: { code: "40", name: "福岡県", labelSize: 11 },
  gunma: { code: "10", name: "群馬県", labelSize: 12 },
  hiroshima: { code: "34", name: "広島県", labelSize: 13 },
  kanagawa: { code: "14", name: "神奈川県", labelSize: 12 },
  kyoto: { code: "26", name: "京都府", labelSize: 12 },
  nara: { code: "29", name: "奈良県", labelSize: 12 },
  oita: { code: "44", name: "大分県", labelSize: 13 },
  okinawa: {
    code: "47",
    name: "沖縄県",
    labelSize: 12,
    insets: [
      {
        title: "先島諸島",
        corner: "top-left",
        width: 0.44,
        match: (lon) => lon < 126,
      },
      {
        title: "大東諸島",
        corner: "bottom-right",
        width: 0.16,
        match: (lon) => lon > 130,
      },
    ],
  },
  saitama: { code: "11", name: "埼玉県", labelSize: 11 },
  shiga: { code: "25", name: "滋賀県", labelSize: 13 },
  shizuoka: { code: "22", name: "静岡県", labelSize: 12 },
};

const [slug, topojsonPath, flag] = process.argv.slice(2);
const pref = PREFECTURES[slug];
if (!pref || !topojsonPath) {
  console.error(
    `usage: node scripts/maps/generate-prefecture-map.mjs <${Object.keys(PREFECTURES).join("|")}> <topojson> [--apply]`
  );
  process.exit(1);
}

const SOURCE = `Based on Historical Administrative Areas Dataset beta (CODH), 2023-01-01. CC BY 4.0. https://geoshape.ex.nii.ac.jp/city/choropleth/${pref.code}_city_dc.html doi:10.20676/00000447. Projected and labeled for this site.`;

const topology = JSON.parse(readFileSync(topojsonPath, "utf8"));
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

// 政令指定都市は N03_004 が空で N03_003 に市名が入る。XX8xx は埋立地・所属未定地など。
const features = topology.objects.city.geometries.map((geometry) => {
  const { N03_003, N03_004, N03_007 } = geometry.properties;
  return {
    code: N03_007,
    name: N03_004 ?? N03_003 ?? "",
    municipality: Number(N03_007) % 1000 < 800,
    polygons: geometry.arcs.map((polygon) => polygon.map(ring)),
  };
});

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

// 面積が最大の島の外周。
function largestRing(polygons) {
  return polygons
    .map((polygon) => polygon[0])
    .sort((a, b) => Math.abs(ringArea(b)) - Math.abs(ringArea(a)))[0];
}

// 最大の島（外周）の重心。外れる形のときは重心の高さで最も広い内側区間の中点。
function labelPoint(polygons) {
  const outer = largestRing(polygons);
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
  let best = centroid;
  let widest = 0;
  for (let i = 0; i + 1 < crossings.length; i += 2) {
    if (crossings[i + 1] - crossings[i] > widest) {
      widest = crossings[i + 1] - crossings[i];
      best = [(crossings[i] + crossings[i + 1]) / 2, centroid[1]];
    }
  }
  return best;
}

function firstPoint(feature) {
  return feature.polygons[0][0][0];
}

function bounds(fitFeatures) {
  const lats = fitFeatures.flatMap((f) => f.polygons.flat(2).map(([, lat]) => lat));
  const cosLat = Math.cos(
    (((Math.min(...lats) + Math.max(...lats)) / 2) * Math.PI) / 180
  );
  const points = fitFeatures.flatMap((f) => f.polygons.flat(2));
  const xs = points.map(([lon]) => lon * cosLat);
  const ys = points.map(([, lat]) => -lat);
  return {
    cosLat,
    minX: Math.min(...xs),
    maxX: Math.max(...xs),
    minY: Math.min(...ys),
    maxY: Math.max(...ys),
  };
}

// 幅 width の枠に収める投影。原点 (ox, oy) から描く。
function createProjection(fitFeatures, width, ox, oy, padding) {
  const b = bounds(fitFeatures);
  const k = (width - padding * 2) / (b.maxX - b.minX);
  const height = Math.ceil((b.maxY - b.minY) * k + padding * 2);
  const project = ([lon, lat]) => [
    (lon * b.cosLat - b.minX) * k + padding + ox,
    (-lat - b.minY) * k + padding + oy,
  ];
  return { project, height };
}

const fmt = (n) => n.toFixed(1);

function pathData(polygons, project) {
  return polygons
    .flat()
    .map(
      (points) =>
        `M${points
          .map(project)
          .map(([x, y]) => `${fmt(x)},${fmt(y)}`)
          .join("L")}Z`
    )
    .join("");
}

// 地名同士が重ならないよう、点は動かさずに文字だけ上下に押し分ける。
function resolveLabelOverlaps(labels, height) {
  for (let iteration = 0; iteration < 60; iteration++) {
    let moved = false;
    for (let i = 0; i < labels.length; i++) {
      for (let j = i + 1; j < labels.length; j++) {
        const a = labels[i];
        const b = labels[j];
        const overlapX = (a.w + b.w) / 2 - Math.abs(a.x - b.x);
        const overlapY = (a.h + b.h) / 2 + 1 - Math.abs(a.y - b.y);
        if (overlapX <= 0 || overlapY <= 0) continue;
        const shift = overlapY / 2;
        if (a.y <= b.y) {
          a.y -= shift;
          b.y += shift;
        } else {
          a.y += shift;
          b.y -= shift;
        }
        moved = true;
      }
    }
    for (const l of labels) {
      l.y = Math.min(Math.max(l.y, l.h), height - 2);
      l.x = Math.min(Math.max(l.x, l.w / 2 + 2), WIDTH - l.w / 2 - 2);
    }
    if (!moved) break;
  }
}

function text(label, size, extra = "") {
  return `<text x="${fmt(label.x)}" y="${fmt(label.y)}" font-size="${size}" font-family="sans-serif" text-anchor="middle" fill="black" stroke="white" stroke-width="3" paint-order="stroke"${extra}>${label.text}</text>`;
}

const insets = pref.insets ?? [];
const insetOf = (f) => {
  const [lon, lat] = firstPoint(f);
  return insets.find((inset) => inset.match(lon, lat, f.code));
};
const mainFeatures = features.filter((f) => !insetOf(f));
const mainMunicipalities = mainFeatures.filter((f) => f.municipality);
// 縦長の県は高さも最大 800 に収まるよう、幅を縮めて描く。
let WIDTH = MAX_WIDTH;
let main = createProjection(mainMunicipalities, WIDTH, 0, 0, PADDING);
if (main.height > MAX_WIDTH) {
  WIDTH = Math.round((MAX_WIDTH * MAX_WIDTH) / main.height);
  main = createProjection(mainMunicipalities, WIDTH, 0, 0, PADDING);
}
const HEIGHT = main.height;

const shapes = [];
const labels = [];
const decorations = [];
const positions = {};

function place(feature, project, target = shapes) {
  const fill = feature.municipality ? "white" : "#e5e7eb";
  target.push(
    `<path d="${pathData(feature.polygons, project)}" fill="${fill}" stroke="gray" stroke-width="1.2" fill-rule="evenodd"/>`
  );
  if (!feature.municipality) return;
  const [x, y] = project(labelPoint(feature.polygons));
  positions[feature.name] = {
    mapX: Number(((x / WIDTH) * 100).toFixed(1)),
    mapY: Number(((y / HEIGHT) * 100).toFixed(1)),
  };
  labels.push({
    text: feature.name,
    x,
    // 公開済みの大きい点（直径約24px）に地名がかぶらないよう、点の中心から離す。
    y: y + pref.labelSize + 12,
    w: feature.name.length * pref.labelSize,
    h: pref.labelSize,
  });
}

for (const feature of mainFeatures) place(feature, main.project);

insets.forEach((inset, index) => {
  const members = features.filter((f) => insetOf(f) === inset);
  // 枠の範囲は各町村の主要な島で決め、遠く離れた小島は枠の外に描かない。
  const mainIslands = members.map((f) => ({
    polygons: [[largestRing(f.polygons)]],
  }));
  const boxWidth = Math.round(WIDTH * inset.width);
  const probe = createProjection(mainIslands, boxWidth, 0, 0, 14);
  const boxHeight = probe.height + 18;
  const ox = inset.corner.endsWith("left") ? 8 : WIDTH - boxWidth - 8;
  const oy = inset.corner.startsWith("top") ? 8 : HEIGHT - boxHeight - 8;
  const { project } = createProjection(mainIslands, boxWidth, ox, oy + 18, 14);
  const clipId = `inset-${index}`;
  // 注記は枠の幅に収まるときだけ添える（1文字 ≒ 11px）。
  const note = "（縮尺は本島と異なります）";
  const title =
    (inset.title + note).length * 11 + 12 <= boxWidth
      ? inset.title + note
      : inset.title;
  decorations.push(
    `<clipPath id="${clipId}"><rect x="${ox}" y="${oy}" width="${boxWidth}" height="${boxHeight}"/></clipPath>`,
    `<rect x="${ox}" y="${oy}" width="${boxWidth}" height="${boxHeight}" fill="#f8fafc" stroke="black" stroke-width="1" stroke-dasharray="5 3"/>`,
    `<text x="${ox + 6}" y="${oy + 14}" font-size="11" font-family="sans-serif" fill="black">${title}</text>`
  );
  const clipped = [];
  for (const feature of members) place(feature, project, clipped);
  shapes.push(`<g clip-path="url(#${clipId})">${clipped.join("")}</g>`);
});

resolveLabelOverlaps(labels, HEIGHT);

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${WIDTH} ${HEIGHT}" role="img"><title>${pref.name}の市町村境界図</title><metadata>${SOURCE}</metadata>${decorations.join("")}${shapes.join("")}${labels.map((l) => text(l, pref.labelSize)).join("")}</svg>\n`;

const imagePath = `web/public/img/${slug}-municipality-map.svg`;
writeFileSync(imagePath, svg);

if (flag === "--apply") {
  const dataPath = `web/src/features/${slug}-map/shared/municipalities.ts`;
  const missing = [];
  // 作業ツリーが CRLF でも照合できるよう LF にそろえる（リポジトリ内は LF）。
  const updated = readFileSync(dataPath, "utf8")
    .replace(/\r\n/g, "\n")
    .replace(
    /name: "([^"]+)",\n([\s\S]*?)mapX: [\d.]+,\n(\s+)mapY: [\d.]+,/g,
    (match, name, between, indent) => {
      const p = positions[name];
      if (!p) {
        missing.push(name);
        return match;
      }
      return `name: "${name}",\n${between}mapX: ${p.mapX},\n${indent}mapY: ${p.mapY},`;
    }
  );
  if (missing.length) {
    console.error(`positions not found for: ${missing.join(", ")}`);
    process.exit(1);
  }
  writeFileSync(dataPath, updated);
}

console.log(
  JSON.stringify({ slug, width: WIDTH, height: HEIGHT, positions }, null, 2)
);
