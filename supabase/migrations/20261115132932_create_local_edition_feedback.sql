-- 全国一覧への意見掲示板。投稿は即時公開し、管理者のみ非表示にできる。
-- 連載申請とは別テーブル。アクセスはアプリケーションの管理クライアント経由。
CREATE TABLE public.local_edition_feedback (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  display_name TEXT NOT NULL DEFAULT '匿名',
  body TEXT NOT NULL,
  is_hidden BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CONSTRAINT local_edition_feedback_name_length
    CHECK (char_length(btrim(display_name)) BETWEEN 1 AND 40),
  CONSTRAINT local_edition_feedback_body_length
    CHECK (char_length(btrim(body)) BETWEEN 1 AND 2000)
);
CREATE INDEX idx_local_edition_feedback_public_created_at
  ON public.local_edition_feedback (created_at DESC, id DESC)
  WHERE is_hidden = false;
CREATE INDEX idx_local_edition_feedback_created_at
  ON public.local_edition_feedback (created_at DESC, id DESC);
ALTER TABLE public.local_edition_feedback ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON TABLE public.local_edition_feedback FROM PUBLIC, anon, authenticated;
GRANT ALL ON TABLE public.local_edition_feedback TO service_role;
COMMENT ON TABLE public.local_edition_feedback IS '全国一覧への意見掲示板。即時公開、管理者による非表示対応';

-- 掲示板専用の投稿制限。既存オープンデータAPIのDB機能に依存しない。
CREATE TABLE public.local_edition_feedback_rate_limits (
  key TEXT NOT NULL CHECK (char_length(key) BETWEEN 1 AND 256),
  window_start TIMESTAMPTZ NOT NULL,
  request_count INTEGER NOT NULL DEFAULT 1 CHECK (request_count > 0),
  PRIMARY KEY (key, window_start)
);
CREATE INDEX idx_local_edition_feedback_rate_limits_window_start
  ON public.local_edition_feedback_rate_limits (window_start);
ALTER TABLE public.local_edition_feedback_rate_limits ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON TABLE public.local_edition_feedback_rate_limits FROM PUBLIC, anon, authenticated;
GRANT ALL ON TABLE public.local_edition_feedback_rate_limits TO service_role;

CREATE FUNCTION public.consume_local_edition_feedback_rate_limit(
  p_key TEXT, p_window_start TIMESTAMPTZ, p_limit INTEGER
) RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY INVOKER
SET search_path = public
AS $$
DECLARE
  v_count INTEGER;
BEGIN
  IF p_limit IS NULL OR p_limit < 1 THEN
    RAISE EXCEPTION 'p_limit must be positive' USING ERRCODE = '22023';
  END IF;
  INSERT INTO public.local_edition_feedback_rate_limits (key, window_start, request_count)
  VALUES (p_key, p_window_start, 1)
  ON CONFLICT (key, window_start)
  DO UPDATE SET request_count = local_edition_feedback_rate_limits.request_count + 1
  RETURNING request_count INTO v_count;
  IF v_count = 1 THEN
    DELETE FROM public.local_edition_feedback_rate_limits
    WHERE window_start < p_window_start - INTERVAL '1 hour';
  END IF;
  RETURN v_count <= p_limit;
END;
$$;
REVOKE ALL ON FUNCTION public.consume_local_edition_feedback_rate_limit(TEXT, TIMESTAMPTZ, INTEGER) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.consume_local_edition_feedback_rate_limit(TEXT, TIMESTAMPTZ, INTEGER) TO service_role;
