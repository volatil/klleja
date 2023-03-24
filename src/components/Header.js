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
			<div>
				<img style={{ width: "40px" }} src="/assets/svg/lupa.svg" alt="Buscar" />
				<img style={{ width: "40px" }} src="/assets/svg/hamburguesa.svg" alt="MENU" />
			</div>
		</header>
	);
}
export default Header;
