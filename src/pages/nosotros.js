import Head from "next/head";

import { HEAD } from "@/helpers/CONST";

import Header from "@/components/Header";
import TituloPagina from "@/components/TituloPagina";
import Footer from "@/components/Footer";

import css from "@/styles/Nosotros.module.css";

function Nosotros() {
	return (
		<>
			<Head>
				<title>NOSOTROS | KLLEJA</title>
				<meta name="description" content={HEAD.description} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />

				<meta name="title" content={HEAD.titleAll} />

				<meta property="og:type" content="website" />
				<meta property="og:url" content={HEAD.url} />
				<meta property="og:title" content={HEAD.titleAll} />
				<meta property="og:description" content={HEAD.description} />
				<meta property="og:image" content={HEAD.image} />

				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content={HEAD.url} />
				<meta property="twitter:title" content={HEAD.titleAll} />
				<meta property="twitter:description" content={HEAD.description} />
				<meta property="twitter:image" content={HEAD.image} />
			</Head>
			<Header />
			<main>
				<TituloPagina titulo="nosotros" />

				<div className={css.nosotros}>
					<h4>confiarón en nosotros</h4>
					<div>
						<img src="/assets/svg/tripadvisor.svg" alt="TripAdvisor" />
						<img src="/assets/svg/ticketmaster.svg" alt="Ticketmaster" />
						<img src="/assets/svg/netflix.svg" alt="Netflix" />
						<img src="/assets/svg/airbnb.svg" alt="Airbnb" />
						<img src="/assets/svg/wallmart.svg" alt="Wallmart" />
					</div>
				</div>

				<div className={css.misionvision}>
					<div>
						<h4>visión</h4>
						<p>Apoyar a los niños, niñas y jóvenes en el desarrollo de sus competencias o capacidades para su correcta formación deportiva a través de esta red.</p>
					</div>
					<div className={css.imagen}>
						<img src="/assets/images/vision.png" alt="visión" />
					</div>
				</div>
				<div className={css.misionvision}>
					<div className={css.imagen}>
						<img src="/assets/images/mision.png" alt="misión" />
					</div>
					<div>
						<h4>misión</h4>
						<p>Combatir los prejuicios democratizando los deportes outdoor, extremos y/o de acción para que las personas puedan vivir esta experiencia y constituyan una comunidad.</p>
					</div>
				</div>

				<div className={css.quienessomos}>
					<div className={css.titulo}>
						<img src="/assets/images/quienessomos.png" alt="Quiénes Somos" />
						<h4>quiénes somos</h4>
					</div>
					<div>
						<div>
							<img src="/assets/images/perfil.png" alt="Nombre" />
							<ul>
								<li>
									<strong>Nombre</strong>
								</li>
								<li>Cargo</li>
								<li>
									<a href="mailto:algo@klleja.cl">correo</a>
								</li>
							</ul>
						</div>
						<div>
							<img src="/assets/images/perfil.png" alt="Nombre" />
							<ul>
								<li>
									<strong>Nombre</strong>
								</li>
								<li>Cargo</li>
								<li>
									<a href="mailto:algo@klleja.cl">correo</a>
								</li>
							</ul>
						</div>
						<div>
							<img src="/assets/images/perfil.png" alt="Nombre" />
							<ul>
								<li>
									<strong>Nombre</strong>
								</li>
								<li>Cargo</li>
								<li>
									<a href="mailto:algo@klleja.cl">correo</a>
								</li>
							</ul>
						</div>
						<div>
							<img src="/assets/images/perfil.png" alt="Nombre" />
							<ul>
								<li>
									<strong>Nombre</strong>
								</li>
								<li>Cargo</li>
								<li>
									<a href="mailto:algo@klleja.cl">correo</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
export default Nosotros;
