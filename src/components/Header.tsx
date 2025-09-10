import { useLocation } from 'preact-iso';

export function Header() {
	const { url } = useLocation();

	return (
		<header>
			<nav>
				<a href="/" class={url == '/' && 'active'}>
					Home
				</a>
				<a href="/sim" class={url == '/sim' && 'active'}>
					Simulator
				</a>
				<a href="/404" class={url == '/404' && 'active'}>
					404
				</a>
				<a href="/skills" class={url == "/skills" && 'active'}>
					Skills
				</a>
			</nav>
		</header>
	);
}
