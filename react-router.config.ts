import type { Config } from "@react-router/dev/config";

import products from "app/assets/products.json";
import type { Products } from "app/routes/products/types";

const productsKeys = Object.keys(products as Products) as Array<keyof Products>;

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
		const productPages = productsKeys.map((key) => `/products/${key}`);
		return ["/", "/about", "/products", ...productPages];
	},
} satisfies Config;
