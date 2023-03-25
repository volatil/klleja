import Link from "next/link";
import { useRouter } from "next/router";

import css from "@/styles/Header.module.css";

function MenuContenido() {
	const router = useRouter();

	function tamoactivo(url) {
		const clase = router.pathname === url ? `${css.tamosactivo}` : "";
		return clase;
	}

	return (
		<nav className={css.navMenu}>
			<ul>
				<li className={tamoactivo("/")}>
					<Link href="/">
						<p>inicio</p>
						<span />
					</Link>
				</li>
				<li className={tamoactivo("/tienda")}>
					<Link href="/tienda">
						<p>tienda</p>
						<span />
					</Link>
				</li>
				<li className={tamoactivo("/convenios")}>
					<Link href="/convenios">
						<p>convenios</p>
						<span />
					</Link>
				</li>
				<li className={tamoactivo("/ubicacion")}>
					<Link href="/ubicacion">
						<p>ubicación</p>
						<span />
					</Link>
				</li>
				<li className={tamoactivo("/contacto")}>
					<Link href="/contacto">
						<p>contacto</p>
						<span />
					</Link>
				</li>
			</ul>
		</nav>
	);
}
export default MenuContenido;
