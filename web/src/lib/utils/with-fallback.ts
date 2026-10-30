/**
 * Promise が失敗したときにエラーをログに残して代わりの値を返す。
 *
 * 議案本文の表示に必須ではない付随データ（インタビュー・回答数など）の取得に使い、
 * 対応するテーブルを持たない環境でもページ全体を落とさないようにする。
 */
export async function withFallback<T, F>(
  promise: Promise<T>,
  fallback: F,
  label: string
): Promise<T | F> {
  try {
    return await promise;
  } catch (error) {
    console.error(`Failed to load ${label}; using fallback`, error);
    return fallback;
  }
}
