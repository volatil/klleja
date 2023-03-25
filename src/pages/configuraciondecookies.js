import Head from "next/head";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const configuraciondecookies = function () {
	return (
		<>
			<Head>
				<title>CONFIGURACIÓN DE COOKIES | KLLEJA</title>
				<meta name="description" content="The beat of life" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<main>
				<h3>Configuración de cookies</h3>
			</main>
			<Footer />
		</>
	);
};
export default configuraciondecookies;
