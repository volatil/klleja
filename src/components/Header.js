import Link from "next/link";
import css from "@/styles/Header.module.css";

function Header(props) {
	const { ishome } = props;
	return (
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
				<div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
					<p style={{ color: "black", fontWeight: "700", fontSize: "1.8em" }}>MENU</p>
					<img style={{ width: "40px" }} src="/assets/svg/hamburguesa.svg" alt="MENU" />
				</div>
			</div>
		</header>
	);
}
export default Header;
