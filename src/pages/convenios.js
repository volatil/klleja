import Head from "next/head";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
				<h2>CONVENIOS</h2>
			</main>
			<Footer />
		</>
	);
}
export default convenios;
