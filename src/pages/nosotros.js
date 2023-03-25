import Head from "next/head";

import Header from "@/components/Header";
import TituloPagina from "@/components/TituloPagina";
import Footer from "@/components/Footer";

import css from "@/styles/Nosotros.module.css";

function convenios() {
	return (
		<>
			<Head>
				<title>CONVENIOS | KLLEJA</title>
				<meta name="description" content="The beat of life" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<main>
				<TituloPagina titulo="nosotros" />

				<div className={css.convenios}>
					<h3>convenios</h3>
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
					<div>
						<img src="/assets/images/vision.png" alt="visión" />
					</div>
				</div>
				<div className={css.misionvision}>
					<div>
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
export default convenios;
