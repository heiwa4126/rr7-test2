import { useState } from "react";
import type { Route } from "./+types/home";
import logoDark from "/logo-dark.svg";
import logoLight from "/logo-light.svg";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "New React Router App" },
		{ name: "description", content: "Welcome to React Router!" },
	];
}

function CounterButton({ initialCount = 0 }: { initialCount?: number }) {
	const [count, setCount] = useState(initialCount);
	return (
		<button type="button" onClick={() => setCount((count) => count + 1)}>
			count is {count}
		</button>
	);
}

export default function Home() {
	return (
		<main>
			<div>
				<img src={logoLight} alt="logo" className="block w-[26.5rem] dark:hidden" />
				<img src={logoDark} alt="logo" className="hidden w-[26.5rem] dark:block" />
			</div>
			<h1>Welcome to React Router!</h1>
			<p>
				React Router v7 の Framework モードで、GitHub Pages カスタムドメインや Cloudflare Pages
				でデプロイするテスト。
			</p>
			<div>
				<CounterButton /> <CounterButton initialCount={999} />
				<p>
					TODO: ここにハイドレーションエラーを引き起こすコードを追加する
					(ランダムな数値を表示、等)。
				</p>
			</div>
		</main>
	);
}
