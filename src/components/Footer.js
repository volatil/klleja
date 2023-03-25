import Link from "next/link";

import css from "@/styles/Footer.module.css";

const Footer = function () {
	return (
		<footer className={css.footer}>
			<div className={css.puntas} />
			<nav>
				<ul>
					<li>
						<Link href="/politicadeprivacidad">
							<p>Política de privacidad</p>
						</Link>
					</li>
					<li>
						<Link href="/terminosycondiciones">
							<p>Términos y condiciones</p>
						</Link>
					</li>
					<li>
						<Link href="/configuraciondecookies">
							<p>Configuración de cookies</p>
						</Link>
					</li>
				</ul>
			</nav>
		</footer>
	);
};
export default Footer;
