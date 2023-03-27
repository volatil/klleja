import Head from "next/head";

import Header from "@/components/Header";
import TituloPagina from "@/components/TituloPagina";
import Footer from "@/components/Footer";

const politicadeprivacidad = function () {
	return (
		<>
			<Head>
				<title>POLÍTICA DE PRIVACIDAD | KLLEJA</title>
				<meta name="description" content="The beat of life" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
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
