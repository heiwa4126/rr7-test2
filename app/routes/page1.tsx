import type { Route } from "./+types/page1";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Page 1 - rr7-test2" },
		{
			name: "description",
			content: "とあるページ1だよ",
		},
	];
}

export default function Page1() {
	return (
		<main>
			<h1>Page 1</h1>
			<p>ここは、とあるページ1だよ。嘘いつわりないよ</p>
		</main>
	);
}
