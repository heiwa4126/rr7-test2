import { projectName } from "~/consts";
import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: `About ${projectName}` },
		{
			name: "description",
			content: "このプロジェクトの説明",
		},
	];
}

export default function About() {
	return (
		<main>
			<h1>About</h1>
			<p>
				"{projectName}" は、 React Router v7 の Framework モードで、GitHub Pages カスタムドメインや
				Cloudflare Pages でデプロイするためのプロジェクトです。
			</p>
		</main>
	);
}
