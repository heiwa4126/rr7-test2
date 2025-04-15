import type { Config } from "@react-router/dev/config";

export default {
	// Config options...
	// Server-side render by default, to enable SPA mode set this to `false`

	// パターン 1 : `pnpm start`
	// ssr: true,

	// パターン 2 : `pnpm build && pnpm preview`
	// ssr: false,

	// パターン 3 : `pnpm build && pnpm preview`
	ssr: false,
	async prerender() {
		return ["/", "/about"];
	},
} satisfies Config;
