import { type RouteConfig, index, prefix, route } from "@react-router/dev/routes";

export default [
	index("routes/home.tsx"),
	route("about", "routes/about.tsx"),
	...prefix("products", [
		index("routes/products/home.tsx"),
		route(":id", "routes/products/product.tsx"),
	]),
] satisfies RouteConfig;
