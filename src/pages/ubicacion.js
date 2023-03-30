import Head from "next/head";

import { HEAD } from "@/helpers/CONST";

import Header from "@/components/Header";
import TituloPagina from "@/components/TituloPagina";
import Footer from "@/components/Footer";

function ubicacion() {
	return (
		<>
			<Head>
				<title>UBICACIÓN | KLLEJA</title>
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
				<TituloPagina titulo="ubicación" />
				<div>
					<iframe title="mapa" style={{ border: "none", width: "100%" }} src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13415.269838936052!2d-70.5859866!3d-32.79709905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2scl!4v1679626498491!5m2!1ses-419!2scl" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
				</div>
			</main>
			<Footer />
		</>
	);
}
export default ubicacion;
