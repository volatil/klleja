import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import { API } from "@/helpers/CONST";
import precio from "@/helpers/helpers";

import Header from "@/components/Header";
import TituloPagina from "@/components/TituloPagina";
import Footer from "@/components/Footer";
import Productos from "@/components/Productos";

// export async function getServerSideProps() {
// 	// Fetch data from external API
// 	const res = await fetch("https://.../data");
// 	const data = await res.json();

// 	// Pass data to the page via props
// 	return { props: { data } };
// }

const Detalle = function () {
	const [ladata, setladata] = useState(null);

	const router = useRouter();
	const { id, nombre } = router.query;

	useEffect(() => {
		async function trae() {
			const traido = await fetch(API);
			let data = await traido.json();
			data = await data.values;
			const productoexacto = await data[id];
			setladata( productoexacto );
			console.debug( "test repeticion" );
			// console.debug( productoexacto );
			// if ( ladata ) {
			// 	const p = {
			// 		elid: ladata[0],
			// 		nombre: ladata[2],
			// 		precio: precio(ladata[3]),
			// 		imagen: ladata[6],
			// 		descripcion: ladata[7],
			// 	};
			// 	console.debug( p.nombre );
			// }
		}
		trae();
	}, [id]);

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
				<TituloPagina titulo={`Producto: ${id} ${nombre}`} />
				{/* <Productos info={ladata} /> */}
				{/* <h4>{ladata ? "si" : "no"}</h4>
				<h4>{ladata || "nada"}</h4> */}
				{
					ladata
						&& (
							<>
								<h5>{ladata[2]}</h5>
								<img src={ladata[6]} alt={ladata[2]} />
							</>
						)
				}
			</main>
			<Footer />
		</>
	);
};
export default Detalle;
