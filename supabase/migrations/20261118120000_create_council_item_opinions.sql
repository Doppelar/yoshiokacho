-- 吉岡町以外の議会（高崎市など）の議案への意見掲示板。
-- 議案はアプリ内の静的データで管理しているため、bills への外部キーではなく
-- 議会の識別子（例: takasaki）と議案ID（例: r8-4-gian-54）で紐づける。
-- 投稿と同時に公開し、不適切な投稿は is_hidden = true で非表示にする。
-- RLS は有効化するが、ポリシーは定義しない（デフォルト全拒否）。
-- データアクセスは service_role（createAdminClient）経由。
CREATE TABLE public.council_item_opinions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  council TEXT NOT NULL,
  item_id TEXT NOT NULL,
  commenter_type TEXT NOT NULL,
  stance TEXT NOT NULL,
  residence TEXT NOT NULL,
  body TEXT NOT NULL,
  is_hidden BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CONSTRAINT council_item_opinions_council_format
    CHECK (council ~ '^[a-z0-9-]{1,40}$'),
  CONSTRAINT council_item_opinions_item_id_format
    CHECK (item_id ~ '^[a-z0-9-]{1,100}$'),
  CONSTRAINT council_item_opinions_commenter_type_check
    CHECK (commenter_type IN ('citizen', 'expert')),
  CONSTRAINT council_item_opinions_stance_check
    CHECK (stance IN ('for', 'against', 'neutral')),
  CONSTRAINT council_item_opinions_residence_check
    CHECK (residence IN ('in_town', 'out_of_town')),
  CONSTRAINT council_item_opinions_body_len
    CHECK (char_length(body) BETWEEN 1 AND 1000)
);

CREATE INDEX idx_council_item_opinions_item_created_at
  ON public.council_item_opinions (council, item_id, created_at DESC)
  WHERE is_hidden = false;

ALTER TABLE public.council_item_opinions ENABLE ROW LEVEL SECURITY;

REVOKE ALL ON TABLE public.council_item_opinions FROM PUBLIC, anon, authenticated;
GRANT ALL ON TABLE public.council_item_opinions TO service_role;

COMMENT ON TABLE public.council_item_opinions IS
  '吉岡町以外の議会の議案への意見。投稿と同時に公開し、is_hidden で非表示にできる';
COMMENT ON COLUMN public.council_item_opinions.council IS
  '議会の識別子（takasaki など）';
COMMENT ON COLUMN public.council_item_opinions.item_id IS
  'アプリの静的データ上の議案ID（r8-4-gian-54 など）';
COMMENT ON COLUMN public.council_item_opinions.residence IS
  'in_town=市町村内, out_of_town=市町村外';
