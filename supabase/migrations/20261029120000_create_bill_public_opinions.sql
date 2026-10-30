-- 議案に対する住民・専門家の意見。
-- 投稿と同時に公開する。不適切な投稿は is_hidden = true で非表示にする。
-- RLS は有効化するが、ポリシーは定義しない（デフォルト全拒否）。
-- データアクセスは service_role（createAdminClient）経由。

CREATE TABLE bill_public_opinions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  bill_id UUID NOT NULL REFERENCES bills(id) ON DELETE CASCADE,
  commenter_type TEXT NOT NULL,
  stance TEXT NOT NULL,
  residence TEXT NOT NULL,
  body TEXT NOT NULL,
  is_hidden BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CONSTRAINT bill_public_opinions_commenter_type_check
    CHECK (commenter_type IN ('citizen', 'expert')),
  CONSTRAINT bill_public_opinions_stance_check
    CHECK (stance IN ('for', 'against', 'neutral')),
  CONSTRAINT bill_public_opinions_residence_check
    CHECK (residence IN ('in_town', 'out_of_town')),
  CONSTRAINT bill_public_opinions_body_len
    CHECK (char_length(body) BETWEEN 1 AND 1000)
);

CREATE INDEX idx_bill_public_opinions_bill_id_created_at
  ON bill_public_opinions (bill_id, created_at DESC)
  WHERE is_hidden = false;

ALTER TABLE bill_public_opinions ENABLE ROW LEVEL SECURITY;

REVOKE ALL ON TABLE bill_public_opinions FROM PUBLIC, anon, authenticated;
GRANT ALL ON TABLE bill_public_opinions TO service_role;

COMMENT ON TABLE bill_public_opinions IS
  '議案への意見。投稿と同時に公開し、is_hidden で非表示にできる';
COMMENT ON COLUMN bill_public_opinions.commenter_type IS
  'citizen=一般市民, expert=専門家（自己申告）';
COMMENT ON COLUMN bill_public_opinions.stance IS
  'for=賛成, against=反対, neutral=どちらでもない';
COMMENT ON COLUMN bill_public_opinions.residence IS
  'in_town=町内, out_of_town=町外';
