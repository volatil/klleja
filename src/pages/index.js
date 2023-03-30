import Head from "next/head";
// import Image from "next/image";

import { HEAD } from "@/helpers/CONST";
// import { Jost } from "next/font/google";
// import styles from "@/styles/Home.module.css";

import Header from "@/components/Header";
import Carrusel from "@/components/Carrusel";
import LosMasVendidos from "@/components/LosMasVendidos";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<>
			<Head>
				<title>KLLEJA | The beat of life</title>
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
			<Header ishome />
			<main>
				<Carrusel />
				<LosMasVendidos />
			</main>
			<Footer />
		</>
	);
}
