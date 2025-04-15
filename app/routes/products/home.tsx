import { Link } from "react-router";
import products from "~/assets/products.json";
import { projectName } from "~/consts";
import type { Route } from "./+types/home";
import type { ProductWithId, Products } from "./types";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: `製品一覧 - ${projectName}` },
		{
			name: "description",
			content: "製品一覧",
		},
	];
}

export default function Page() {
	const ps: ProductWithId[] = Object.entries(products as Products)
		.map(([id, product]) => ({ id, ...product }))
		.sort((a, b) => {
			return a.name.localeCompare(b.name, undefined, { sensitivity: "base" });
		});

	return (
		<>
			<h1>製品一覧</h1>
			<p>ここは製品一覧ページだよ</p>
			<ul>
				{ps.map((product) => (
					<li key={product.id}>
						<Link to={product.id.toString()}>
							{product.name} <span>- {product.summary}</span>
						</Link>
					</li>
				))}
			</ul>
		</>
	);
}
