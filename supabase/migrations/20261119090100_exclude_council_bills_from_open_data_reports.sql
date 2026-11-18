-- 公開データAPI（みらい議会＠吉岡町）のインタビューレポートから、
-- 高崎市など他の議会の議案（bills.council が NULL でないもの）のレポートを除外する。
-- 変更点は eligible_bills の条件に b.council IS NULL を加えたことだけ。
CREATE OR REPLACE FUNCTION find_open_data_interview_reports(
  p_min_public_reports INTEGER,
  p_limit INTEGER,
  p_cursor_created_at TIMESTAMPTZ DEFAULT NULL,
  p_cursor_id UUID DEFAULT NULL
) RETURNS TABLE (
  report_id UUID,
  bill_id UUID,
  bill_name TEXT,
  stance TEXT,
  role TEXT,
  role_title TEXT,
  role_description TEXT,
  summary TEXT,
  opinions JSONB,
  interview_session_id UUID,
  created_at TIMESTAMPTZ
)
LANGUAGE sql
STABLE
SET search_path = public
AS $$
  WITH eligible_bills AS (
    SELECT c.bill_id
    FROM interview_report r
    JOIN interview_sessions s ON s.id = r.interview_session_id
    JOIN interview_configs c ON c.id = s.interview_config_id
    JOIN bills b ON b.id = c.bill_id
    WHERE r.is_public_by_admin
      AND r.is_public_by_user
      AND b.publish_status = 'published'
      AND b.council IS NULL
    GROUP BY c.bill_id
    HAVING COUNT(*) >= p_min_public_reports
  )
  SELECT
    r.id AS report_id,
    c.bill_id,
    b.name AS bill_name,
    r.stance::TEXT,
    r.role::TEXT,
    r.role_title,
    r.role_description,
    r.summary,
    r.opinions,
    r.interview_session_id,
    r.created_at
  FROM interview_report r
  JOIN interview_sessions s ON s.id = r.interview_session_id
  JOIN interview_configs c ON c.id = s.interview_config_id
  JOIN bills b ON b.id = c.bill_id
  WHERE c.bill_id IN (SELECT eligible_bills.bill_id FROM eligible_bills)
    AND r.is_public_by_admin
    AND r.is_public_by_user
    AND r.is_data_reuse_consented
    AND (
      p_cursor_created_at IS NULL
      OR (r.created_at, r.id) < (p_cursor_created_at, p_cursor_id)
    )
  ORDER BY r.created_at DESC, r.id DESC
  LIMIT p_limit;
$$;

COMMENT ON FUNCTION find_open_data_interview_reports(INTEGER, INTEGER, TIMESTAMPTZ, UUID) IS
  '公開データAPI用: 二次利用許諾済みの公開レポートを新しい順に返す。議案あたり公開レポート数が閾値未満の議案は除外（webのk-匿名性ゲートと同一基準）';
