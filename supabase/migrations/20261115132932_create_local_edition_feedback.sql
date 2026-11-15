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
