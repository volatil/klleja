import { useState } from "react";
import Link from "next/link";
import css from "@/styles/Header.module.css";

function Categorias() {
	return (
		<nav style={{
			background: "#231f20", position: "absolute", top: "0", left: "0", width: "100%", height: "100%", zIndex: "3",
		}}
		>
			<ul style={{ width: "80%", margin: "80px auto 0" }}>
				<li style={{ width: "100%", textAlign: "center", listStyle: "none" }}>
					<Link
						style={{
							color: "white", fontSize: "6em", fontWeight: "900", textTransform: "uppercase",
						}}
						href="/"
					>inicio
					</Link>
				</li>
				<li style={{ width: "100%", textAlign: "center", listStyle: "none" }}>
					<Link
						style={{
							color: "white", fontSize: "6em", fontWeight: "900", textTransform: "uppercase",
						}}
						href="/tienda"
					>tienda
					</Link>
				</li>
				<li style={{ width: "100%", textAlign: "center", listStyle: "none" }}>
					<Link
						style={{
							color: "white", fontSize: "6em", fontWeight: "900", textTransform: "uppercase",
						}}
						href="/nosotros"
					>nosotros
					</Link>
				</li>
				<li style={{ width: "100%", textAlign: "center", listStyle: "none" }}>
					<Link
						style={{
							color: "white", fontSize: "6em", fontWeight: "900", textTransform: "uppercase",
						}}
						href="/ubicacion"
					>ubicación
					</Link>
				</li>
				<li style={{ width: "100%", textAlign: "center", listStyle: "none" }}>
					<Link
						style={{
							color: "white", fontSize: "6em", fontWeight: "900", textTransform: "uppercase",
						}}
						href="/contacto"
					>contacto
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
		console.debug( "CLICK" );
		console.debug( `Estado: ${desplegarMenu}` );
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
				{ desplegarMenu ? "desplegado" : "oculto" }
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
