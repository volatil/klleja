import { useState } from "react";

import Logo from "@/components/Logo";
import Buscador from "@/components/Buscador";
import MenuContenido from "@/components/MenuContenido";

import css from "@/styles/Header.module.css";

function Header(props) {
	const [desplegarMenu, setdesplegarMenu] = useState(false);
	const { ishome } = props;

	function handleClick() {
		setdesplegarMenu(!desplegarMenu);
	}

	return (
		<>
			<header data-desplegado={desplegarMenu ? "si" : "no"} className={ishome ? `${css.header} ${css.estoyenelhome}` : `${css.header}`}>
				<div className={css.logo}>
					<Logo />
				</div>
				<div className={css.derecha}>
					<div className={css.elbuscador}>
						<Buscador sedespliega={desplegarMenu} />
					</div>
					<div className={css.menu} role="presentation" onClick={handleClick}>
						<p className={!desplegarMenu ? null : `${css.menudesplegado}`}>MENU</p>
						<img src={desplegarMenu ? "/assets/svg/menuAbierto.svg" : "/assets/svg/menuCerrado.svg"} width="40" height="40" alt="MENU" />
					</div>
				</div>
			</header>
			{ desplegarMenu && <MenuContenido /> }
		</>
	);
}
export default Header;
