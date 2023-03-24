import Head from "next/head";
import Header from "@/components/Header";

function ubicacion() {
	return (
		<>
			<Head>
				<title>KLLEJA | The beat of life</title>
				<meta name="description" content="The beat of life" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<h2>UBICACION</h2>
		</>
	);
}
export default ubicacion;
