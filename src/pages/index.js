import Head from "next/head";
import Image from "next/image";
// import { Jost } from "next/font/google";
// import styles from "@/styles/Home.module.css";

import Header from "@/components/Header";
import Carrusel from "@/components/Carrusel";
import Footer from "@/components/Footer";

// const jost = Jost({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<Head>
				<title>KLLEJA | The beat of life</title>
				<meta name="description" content="The beat of life" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header ishome />
			<main>
				<Carrusel />
			</main>
			<Footer />
		</>
	);
}
