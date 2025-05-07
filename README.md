# rr7-test2

React Router v7 の Framework モードで、GitHub Pages カスタムドメインや
Cloudflare Pages でデプロイするためのテストプロジェクト。

SSR: false で、全ページ pre-render してある (hydration してる、ということ)。

追記: わざと pre-render しない [page1](app/routes/page1.tsx) を追加してみた。

## TODO

- pre-render しないページを 1 個追加する
- Hydration Error が起きるコンポーネントを追加する

## 開発

[pnpm](https://pnpm.io/) 使用

```sh
# モジュールのインストール
pnpm i
# 開発サーバの実行
pnpm dev
# ビルドしてプレビュー
pnpm build && pnpm preview
## ↑ssr:false なので `pnpm start` (react-router-serve) はエラーになる
# リフォーマット
pnpm format
# 厳密な型チェック(意外とエラーが出る)
pnpm typecheck
```

これで OK ならデプロイする。

## Cloudflare Pages へのデプロイ

実際にデプロイしたやつ: <https://rr7-test2.pages.dev/>

設定は
GitHub 連携で

- フレームワークプリセット: (なしで OK)
- ビルド コマンド: `pnpm install --frozen-lockfile && pnpm run build`
- ビルド出力ディレクトリ: `build/client`

で。環境変数設定するの忘れた。NODE_VERSION に 22、PNPM_VERSION に 10。
プロダクションとプレビューの 2 つあるのを忘れないこと。

CDN からほぼ無制限に配信できるなら、モジュールを jsDelivr 等から取る必要はないので、バンドルしたそのままにしてある。

- チャンク分割は要るかも
- jsDelivr にすればクライアント側でキャッシュが効くかも (そこまで考えなくてもいいかも)
