# rr7-test2

React Router v7 の Framework モードで、GitHub Pages カスタムドメインや
Cloudflare Pages でデプロイするためのテストプロジェクト。

SSR: false で、なるべく pre-render してある。

## Cloudflare Pages

<https://rr7-test2.pages.dev/>

設定は
GitHub 連携で

- フレームワークプリセット: (なしで OK)
- ビルド コマンド: `pnpm install --frozen-lockfile && pnpm run build`
- ビルド出力ディレクトリ: `build/client`

で。

CDN からほぼ無制限に配信できるなら、モジュールを jsDelivr 等から取る必要はないので、
バンドルしたそのままにしてある。

- チャンク分割は要るかも
- クライアント側でキャッシュが供用されるかも (そこまで考えなくてもいいかも)
