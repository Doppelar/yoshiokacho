const JST_OFFSET_MS = 9 * 60 * 60 * 1000;

/**
 * JST基準の1日の時間範囲を取得（UTC形式で返す）
 */
export function getJstDayRange(): { from: string; to: string } {
  const now = new Date();
  const jstNow = new Date(now.getTime() + JST_OFFSET_MS);

  const startOfJstDay = new Date(
    Date.UTC(
      jstNow.getUTCFullYear(),
      jstNow.getUTCMonth(),
      jstNow.getUTCDate(),
      0,
      0,
      0,
      0
    )
  );

  const startUtc = new Date(startOfJstDay.getTime() - JST_OFFSET_MS);
  const endUtc = new Date(startUtc.getTime() + 24 * 60 * 60 * 1000);

  return {
    from: startUtc.toISOString(),
    to: endUtc.toISOString(),
  };
}

/**
 * JST基準の1ヶ月の時間範囲を取得（UTC形式で返す）
 * 当月1日 00:00 JST から翌月1日 00:00 JST までの範囲
 */
export function getJstMonthRange(): { from: string; to: string } {
  const now = new Date();
  const jstNow = new Date(now.getTime() + JST_OFFSET_MS);

  const startOfJstMonth = new Date(
    Date.UTC(jstNow.getUTCFullYear(), jstNow.getUTCMonth(), 1, 0, 0, 0, 0)
  );

  const startOfNextJstMonth = new Date(
    Date.UTC(jstNow.getUTCFullYear(), jstNow.getUTCMonth() + 1, 1, 0, 0, 0, 0)
  );

  const startUtc = new Date(startOfJstMonth.getTime() - JST_OFFSET_MS);
  const endUtc = new Date(startOfNextJstMonth.getTime() - JST_OFFSET_MS);

  return {
    from: startUtc.toISOString(),
    to: endUtc.toISOString(),
  };
}

/**
 * 直近 days 日間の時間範囲を取得（UTC形式で返す）。
 * AI Gateway の無料枠（30日ごと）に合わせ、暦月ではなく直近の期間で集計するために使う。
 */
export function getRollingRange(
  days: number,
  now: Date = new Date()
): { from: string; to: string } {
  const from = new Date(now.getTime() - days * 24 * 60 * 60 * 1000);
  return { from: from.toISOString(), to: now.toISOString() };
}
