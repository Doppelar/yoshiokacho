# みらい議会

[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/team-mirai-volunteer/mirai-gikai)
[![codecov](https://codecov.io/gh/team-mirai/mirai-gikai/branch/develop/graph/badge.svg)](https://codecov.io/gh/team-mirai/mirai-gikai)

## セットアップ

```bash
# Supabaseの起動
npx supabase start

# 環境変数の設定（必要に応じて.envの内容を変更してください）
cp .env.example .env

# パッケージインストール
pnpm install

# SupabaseのDB初期化, 開発用シードデータのセットアップ
pnpm db:reset

# サーバー起動
pnpm dev
```

## 吉岡町版のローカル開発

Docker を起動してから以下を実行します。

```bash
npx supabase start -x logflare,vector
pnpm seed:yoshioka
pnpm dev
```

`seed:yoshioka` はローカル専用です。令和8年第3回吉岡町議会定例会の議案13件を登録し、既存の国会サンプル議案を非公開にします。サンプルのレコード・回答は削除しません。繰り返し実行すると吉岡町の初期データを上書きするため、管理画面で編集した後は再実行しないでください。通常の再起動では `pnpm seed:yoshioka` は不要です。

出典：吉岡町公式サイトの[9月1日議事日程](https://www.town.yoshioka.lg.jp/gikai/kaigi/pdf/2_gijinittei1_r8_3t%20%282%29.pdf)および[会期日程](https://www.town.yoshioka.lg.jp/gikai/kaigi/pdf/1_kaikinittei_r8_3t.pdf)（2026年9月13日確認）。対象は議案第44〜56号です。認定・同意・諮問・報告・委員会発議はこの初期データには含めません。

議案名と議事日程への掲載のみを確認しています。議案本文、金額、改正理由、議決結果は未確認であり、架空の解説・賛否・住民回答は追加していません。議事日程の曜日と会期日程に不一致があるため曜日を転載せず、会期は会期日程を採用しています。DBの既存必須項目 `originating_house` の `HR` は互換性維持用の値で、衆議院を意味する表示には使用しません。`introduced` は吉岡町版のカードで「議事日程掲載」と表示します。

AI機能は別途APIキーと町議会向けプロンプトの確認が必要です。`pnpm seed` / `pnpm db:reset` は元の国会サンプルを再投入するため、吉岡町版の初期化には使用しないでください。

## マイグレーション操作

```bash
# マイグレーションファイル生成
npx supabase migration new マイグレーション名

# マイグレーション実行 & 型ファイル更新
pnpm db:migrate
```

## Adminユーザーの作成

1. Supabase Studio上で Authentication > Add User からユーザーを作成
2. Supabase Studio上で以下のSQLを実行

```sql
UPDATE auth.users
SET raw_app_meta_data = raw_app_meta_data || '{"roles": ["admin"]}'::jsonb
WHERE email = '<1で作成したユーザーのemail>';
```

> [!NOTE]
> ローカル開発環境では、`pnpm seed`（`pnpm db:reset` からも実行されます）によって `email: admin@example.com, password: admin123456` のAdminユーザーが作成されます。
> このAdminユーザーは `SUPABASE_URL` が localhost を指している場合のみ作成され、ホスト環境（staging・preview ブランチ等）には作成されません。
> メールアドレス・パスワードを変えたい場合は `SEED_ADMIN_EMAIL` / `SEED_ADMIN_PASSWORD` を設定してください。

## Fork して独自サービスを運営する場合

本リポジトリを fork して独自にサービスを運営する場合は、[Fork ガイドライン](./FORK_GUIDELINES.md) を確認してください。本家サービスとの混同防止のため、ロゴ・カラー・サービス名称などの変更が必要です。
