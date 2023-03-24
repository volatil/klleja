import Link from "next/link";

function Header() {
	return (
		<header
			style={{
				background: "white", display: "flex", justifyContent: "space-between", alignItems: "center", height: "80px",
			}}
			id="menu"
		>
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
