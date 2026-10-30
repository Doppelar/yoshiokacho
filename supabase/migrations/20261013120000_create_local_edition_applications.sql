-- みらい議会地方版の連載申請。
-- 投稿時は pending。公開一覧は approved のみ。
-- RLS は有効化するが、ポリシーは定義しない（デフォルト全拒否）。
-- データアクセスは service_role（createAdminClient）経由。

CREATE TABLE local_edition_applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  municipality_name TEXT NOT NULL,
  contact_name TEXT NOT NULL,
  email TEXT NOT NULL,
  site_url TEXT,
  introduction TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CONSTRAINT local_edition_applications_status_check
    CHECK (status IN ('pending', 'approved', 'rejected')),
  CONSTRAINT local_edition_applications_municipality_name_len
    CHECK (char_length(municipality_name) BETWEEN 1 AND 80),
  CONSTRAINT local_edition_applications_contact_name_len
    CHECK (char_length(contact_name) BETWEEN 1 AND 80),
  CONSTRAINT local_edition_applications_email_len
    CHECK (char_length(email) BETWEEN 3 AND 254),
  CONSTRAINT local_edition_applications_site_url_len
    CHECK (site_url IS NULL OR char_length(site_url) BETWEEN 1 AND 500),
  CONSTRAINT local_edition_applications_introduction_len
    CHECK (char_length(introduction) BETWEEN 1 AND 2000)
);

CREATE INDEX idx_local_edition_applications_status_created_at
  ON local_edition_applications (status, created_at DESC);

CREATE TRIGGER update_local_edition_applications_updated_at
  BEFORE UPDATE ON local_edition_applications
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

ALTER TABLE local_edition_applications ENABLE ROW LEVEL SECURITY;

REVOKE ALL ON TABLE local_edition_applications FROM PUBLIC, anon, authenticated;
GRANT ALL ON TABLE local_edition_applications TO service_role;

COMMENT ON TABLE local_edition_applications IS
  'みらい議会地方版の連載申請。公開一覧は承認済みのみ';
COMMENT ON COLUMN local_edition_applications.status IS
  'pending=未審査, approved=承認, rejected=却下';
COMMENT ON COLUMN local_edition_applications.email IS
  '審査連絡用。公開一覧には出さない';
