import Head from "next/head";
import { useRouter } from "next/router";

import Header from "@/components/Header";
import TituloPagina from "@/components/TituloPagina";
import Footer from "@/components/Footer";

// export async function getServerSideProps() {
// 	// Fetch data from external API
// 	const res = await fetch("https://.../data");
// 	const data = await res.json();

// 	// Pass data to the page via props
// 	return { props: { data } };
// }

const Detalle = function () {
	const router = useRouter();
	const { id } = router.query;
	console.debug( id );
	return (
		<>
			<Head>
				<title>!! | KLLEJA</title>
				<meta name="description" content="The beat of life" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<main>
				<TituloPagina titulo={`Producto: ${id}`} />
			</main>
			<Footer />
		</>
	);
};
export default Detalle;
