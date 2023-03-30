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
					<Link href="/" title="inicio">
						<p>inicio</p>
						<span />
					</Link>
				</li>
				<li className={tamoactivo("/tienda")}>
					<Link href="/tienda" title="tienda">
						<p>tienda</p>
						<span />
					</Link>
				</li>
				<li className={tamoactivo("/nosotros")}>
					<Link href="/nosotros" title="nosotros">
						<p>nosotros</p>
						<span />
					</Link>
				</li>
				<li className={tamoactivo("/ubicacion")}>
					<Link href="/ubicacion" title="ubicacion">
						<p>ubicación</p>
						<span />
					</Link>
				</li>
				<li className={tamoactivo("/contacto")}>
					<Link href="/contacto" title="contacto">
						<p>contacto</p>
						<span />
					</Link>
				</li>
			</ul>
		</nav>
	);
}
export default MenuContenido;
