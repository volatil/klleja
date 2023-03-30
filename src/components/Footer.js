import Link from "next/link";

import css from "@/styles/Footer.module.css";

const Footer = function () {
	return (
		<footer className={css.footer}>
			<div className={css.puntas} />
			<nav>
				<ul className={css.paginasinternas}>
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
				<ul className={css.redes}>
					<li>
						<a href="#facebook">
							<img src="/assets/svg/facebook.svg" alt="facebook" />
						</a>
					</li>
					<li>
						<a href="#twitter">
							<img src="/assets/svg/twitter.svg" alt="twitter" />
						</a>
					</li>
					<li>
						<a href="#tiktok">
							<img src="/assets/svg/tiktok.svg" alt="tiktok" />
						</a>
					</li>
				</ul>
			</nav>
		</footer>
	);
};
export default Footer;
