-- 全国版のテーマ（医療のこれからを考える会など）ごとの投稿掲示板。
-- 投稿は即時公開し、管理者のみ非表示にできる。アクセスはアプリケーションの管理クライアント経由。
-- 投稿制限は全国一覧の掲示板と同じ consume_local_edition_feedback_rate_limit を使う。
CREATE TABLE public.national_topic_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  topic TEXT NOT NULL,
  display_name TEXT NOT NULL DEFAULT '匿名',
  body TEXT NOT NULL,
  is_hidden BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CONSTRAINT national_topic_posts_topic_format
    CHECK (topic ~ '^[a-z0-9-]{1,40}$'),
  CONSTRAINT national_topic_posts_name_length
    CHECK (char_length(btrim(display_name)) BETWEEN 1 AND 40),
  CONSTRAINT national_topic_posts_body_length
    CHECK (char_length(btrim(body)) BETWEEN 1 AND 2000)
);
CREATE INDEX idx_national_topic_posts_public
  ON public.national_topic_posts (topic, created_at DESC, id DESC)
  WHERE is_hidden = false;
ALTER TABLE public.national_topic_posts ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON TABLE public.national_topic_posts FROM PUBLIC, anon, authenticated;
GRANT ALL ON TABLE public.national_topic_posts TO service_role;
COMMENT ON TABLE public.national_topic_posts IS '全国版のテーマごとの投稿掲示板。即時公開、管理者による非表示対応';
COMMENT ON COLUMN public.national_topic_posts.topic IS 'テーマID（iryo など）';
