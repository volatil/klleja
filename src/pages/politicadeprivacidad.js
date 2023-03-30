import Head from "next/head";

import { HEAD } from "@/helpers/CONST";

import Header from "@/components/Header";
import TituloPagina from "@/components/TituloPagina";
import Footer from "@/components/Footer";

const politicadeprivacidad = function () {
	return (
		<>
			<Head>
				<title>POLÍTICA DE PRIVACIDAD | KLLEJA</title>
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
				<TituloPagina titulo="Política de privacidad" />
			</main>
			<Footer />
		</>
	);
};
export default politicadeprivacidad;
