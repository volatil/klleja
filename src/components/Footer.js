import Link from "next/link";

import { LINKREDES } from "@/helpers/CONST";

import css from "@/styles/Footer.module.css";

const Suscripcion = function () {
	return (
		<section id={css.suscripcion}>
			<div>
				<p>Ingrese su correo electrónico para obtener un <strong>20% de descuento</strong> en su primer pedido, más las últimas noticias de Klleja.</p>
				<div className={css.suscriptor}>
					<input type="text" placeholder="Correo Electrónico" />
					<button type="button">Inscrirse</button>
				</div>
			</div>
		</section>
	);
};

const Footer = function () {
	return (
		<>
			<Suscripcion />
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
						<li>
							<Link href="/ayuda">
								<p>Ayuda</p>
							</Link>
						</li>
					</ul>
					<ul className={css.redes}>
						<li>
							<a href={LINKREDES.facebook}>
								<img src="/assets/svg/facebook.svg" alt="facebook" />
							</a>
						</li>
						<li>
							<a href={LINKREDES.twitter}>
								<img src="/assets/svg/twitter.svg" alt="twitter" />
							</a>
						</li>
						<li>
							<a href={LINKREDES.tiktok}>
								<img src="/assets/svg/tiktok.svg" alt="tiktok" />
							</a>
						</li>
					</ul>
				</nav>
			</footer>
		</>
	);
};
export default Footer;
