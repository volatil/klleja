import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import css from "@/styles/Header.module.css";

function Categorias() {
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
				<li className={tamoactivo("/nosotros")}>
					<Link href="/nosotros">
						<p>nosotros</p>
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

function Header(props) {
	const [desplegarMenu, setdesplegarMenu] = useState(false);
	const { ishome } = props;

	function handleClick() {
		setdesplegarMenu(!desplegarMenu);
	}

	return (
		<>
			<header className={ishome ? `${css.header} ${css.estoyenelhome}` : `${css.header}`}>
				<div>
					<Link href="/">
						<img style={{ width: "auto" }} src="/assets/images/logo.png" alt="KLLJA" />
					</Link>
				</div>
				<div style={{ display: "flex", gap: "60px" }}>
					<div>
						<img style={{ width: "40px" }} src="/assets/svg/lupa.svg" alt="Buscar" />
					</div>
					<div role="presentation" style={{ display: "flex", alignItems: "center", gap: "10px" }} onClick={handleClick}>
						<p style={{ color: "black", fontWeight: "700", fontSize: "1.8em" }}>MENU</p>
						<img style={{ width: "40px" }} src="/assets/svg/hamburguesa.svg" alt="MENU" />
					</div>
				</div>
			</header>
			{ desplegarMenu && <Categorias /> }
			<div />
		</>
	);
}
export default Header;
