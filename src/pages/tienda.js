import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";

import Header from "@/components/Header";
import TituloPagina from "@/components/TituloPagina";
import Footer from "@/components/Footer";

import { API, HEAD } from "@/helpers/CONST";
import { precio, urlBONITA } from "@/helpers/helpers";
import cssprod from "@/styles/GrillaProductos.module.css";

function Productos(props) {
	const { info } = props;
	const todo = [];
	for ( let count = 1; count <= info.length - 1; count++ ) {
		const p = {
			id: info[count][0],
			nombre: info[count][2],
			precio: precio(info[count][3]),
			imagen: info[count][6],
			descripcion: info[count][7],
		};
		todo.push( p );
	}

	return (
		<>
			{
				todo.map((producto) => {
					const prod = {
						id: producto.id,
						nombre: producto.nombre,
						precio: producto.precio,
						imagen: producto.imagen,
						descripcion: producto.descripcion,
					};
					const url = `/producto/${[prod.id]}/${[urlBONITA(prod.nombre)]}`;
					// url = urlBONITA(url);

					return (
						<Link href={url} className={cssprod.producto} key={prod.id}>
							<div className={cssprod.imagen}>
								<img src={prod.imagen} alt="imagen" />
							</div>
							<div className={cssprod.informacion}>
								<p>{prod.nombre}</p>
								<p className={cssprod.precio}>$ {prod.precio}</p>
							</div>
						</Link>
					);
				})
			}
		</>
	);
}

function Tienda() {
	const [ladata, setladata] = useState(null);

	useEffect(() => {
		async function trae() {
			const traido = await fetch(API);
			const data = await traido.json();
			setladata(data.values);
		}
		trae();
	}, []);

	return (
		<>
			<Head>
				<title>Tienda | KLLEJA</title>
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
				<TituloPagina titulo="tienda" />
				<section className={cssprod.productos}>
					{
						ladata
							? <Productos info={ladata} />
							: (<img className="loading" style={{ width: "100px", margin: "0 auto", display: "block" }} src="/assets/images/loading.webp" alt="Cargando ..." />)
					}
				</section>
			</main>
			<Footer />
		</>
	);
}
export default Tienda;
