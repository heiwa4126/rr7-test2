import { Link } from "react-router";
import products from "~/assets/products.json";
import { projectName } from "~/consts";
import type { Route } from "./+types/product";
import type { Product, Products } from "./types";
import productImage from "/dummy.png";

export function meta({ params }: Route.MetaArgs) {
	const product: Product = (products as Products)[params.id];

	return [
		{
			title: `製品 ${product.name} - ${projectName}`,
			name: "description",
			content: `${product.name}という製品のページ`,
		},
	];
}

export default function EachProduct({ params }: Route.MetaArgs) {
	const product: Product = (products as Products)[params.id];

	return (
		<>
			<h1>{product.name}</h1>
			<div>
				<img src={productImage} alt={`${product.name}製品画像`} />
			</div>
			<p>{product.description}</p>
			<p>
				<Link to="/products">製品一覧に戻る</Link>
			</p>
		</>
	);
}
