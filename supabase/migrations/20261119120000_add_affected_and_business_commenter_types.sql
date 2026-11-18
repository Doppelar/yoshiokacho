-- 意見投稿欄の「あなたの立場」に、当事者（affected）と事業者（business）を追加する。
-- 吉岡町の議案（bill_public_opinions）と高崎市などの議案（council_item_opinions）の両方。
-- 既存の投稿（citizen / expert）はそのまま有効。
ALTER TABLE public.bill_public_opinions
  DROP CONSTRAINT bill_public_opinions_commenter_type_check,
  ADD CONSTRAINT bill_public_opinions_commenter_type_check
    CHECK (commenter_type IN ('citizen', 'affected', 'business', 'expert'));

ALTER TABLE public.council_item_opinions
  DROP CONSTRAINT council_item_opinions_commenter_type_check,
  ADD CONSTRAINT council_item_opinions_commenter_type_check
    CHECK (commenter_type IN ('citizen', 'affected', 'business', 'expert'));

COMMENT ON COLUMN public.bill_public_opinions.commenter_type IS
  'citizen=一般市民, affected=当事者, business=事業者, expert=専門家（自己申告）';
COMMENT ON COLUMN public.council_item_opinions.commenter_type IS
  'citizen=一般市民, affected=当事者, business=事業者, expert=専門家（自己申告）';
