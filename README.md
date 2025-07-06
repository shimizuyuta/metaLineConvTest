# metaLineConv

## プロジェクト概要

このリポジトリは、Meta広告からの流入を想定したランディングページ（LP）をNext.jsで作成し、  
ユーザーのLINE公式アカウント登録を促進、さらにConversions APIを使ってMetaにコンバージョン情報を送信する検証用プロジェクトです。


![image](https://github.com/user-attachments/assets/1a3b35d7-97a2-45b3-abd0-ac853e01775a)


## Next.js プロジェクト作成時の設定

- TypeScript: **Yes**
- ESLint: **Yes**
- Tailwind CSS: **Yes**
- コードを `src/` ディレクトリに配置: **Yes**
- App Router: **Yes（推奨）**
- Turbopack for `next dev`: **Yes**
- インポートエイリアス（デフォルト `@/*`）: **Yes**
- インポートエイリアスの設定: `@/*`



## 目的・今後の予定

- Meta広告のクリックからLP表示  
- LINE公式アカウント登録ボタン設置と誘導  
- コンバージョン発生時にMeta Conversions APIでイベント送信  
- Vercelへの自動デプロイ設定  
- 環境変数によるLINE URL管理  
- フロントとバックエンドの連携検証  



## 開発・起動方法

```bash
npm install
npm run dev

