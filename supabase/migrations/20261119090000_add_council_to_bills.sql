-- 吉岡町以外の議会（高崎市など）の議案を、AIインタビューのために bills に登録できるようにする。
-- council が NULL の議案は従来どおり吉岡町（みらい議会）の議案。
-- council を持つ議案は吉岡町の一覧・検索・オープンデータには出さない。
-- slug は「議会ID-アプリ内議案ID」（例: takasaki-r8-4-gian-54）とし、議会ページと紐づける。
-- slug は既存の一意インデックス（idx_bills_slug）で重複しない。
ALTER TABLE public.bills
  ADD COLUMN council TEXT,
  ADD CONSTRAINT bills_council_format
    CHECK (council IS NULL OR council ~ '^[a-z0-9-]{1,40}$'),
  ADD CONSTRAINT bills_council_slug_prefix
    CHECK (council IS NULL OR (slug IS NOT NULL AND slug LIKE council || '-%'));

COMMENT ON COLUMN public.bills.council IS
  '吉岡町以外の議会の識別子（takasaki など）。NULL は吉岡町の議案';
