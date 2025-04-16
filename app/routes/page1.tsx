import { projectName } from "~/consts";
import type { Route } from "./+types/page1";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: `Page 1 - ${projectName}` },
		{
			name: "description",
			content: "このプロジェクトの説明",
		},
	];
}

export default function Page1() {
	return (
		<main>
			<h1>Page 1</h1>
			<p>わざと prerenderのリストに入っていないページを作ってみた。</p>
			<p>どんな初期HTMLが帰ってくるか観察すること (HydrateFallback() が帰ってくるはず)。</p>
			<p>
				またこのページは「ソフト404」とか「フォールバック」に対応してないサーバだと、直リンやリロードができません。
			</p>
		</main>
	);
}
