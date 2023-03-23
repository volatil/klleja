function Header() {
	return (
		<section style={{ background: "white", display: "flex", justifyContent: "space-between" }} id="menu">
			<img style={{ width: "auto" }} src="/assets/images/logo.png" alt="KLLJA" />
			<img style={{ width: "40px" }} src="/assets/svg/lupa.svg" alt="Buscar" />
			<img style={{ width: "40px" }} src="/assets/svg/hamburguesa.svg" alt="MENU" />
		</section>
	);
}
export default Header;
