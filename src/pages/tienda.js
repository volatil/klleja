import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";

import Header from "@/components/Header";
import TituloPagina from "@/components/TituloPagina";
import Footer from "@/components/Footer";

import { API } from "@/helpers/CONST";
import precio from "@/helpers/helpers";
import cssprod from "@/styles/GrillaProductos.module.css";

function Productos(props) {
	const { info } = props;
	const todo = [];
	for ( let count = 1; count <= info.length - 1; count++ ) {
	// for ( let count = 1; count <= 4; count++ ) {
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
					return (
						// <Link href={{ pathname: "/producto/[id]", query: { id: prod.id } }} className={cssprod.producto} key={prod.id}>
						<Link href={`/producto/${[prod.id]}/${[prod.nombre]}`} className={cssprod.producto} key={prod.id}>
							<img src={prod.imagen} alt="imagen" />
							<p>{prod.nombre}</p>
							<p className={cssprod.precio}>$ {prod.precio}</p>
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
				<title>TIENDA | KLLEJA</title>
				<meta name="description" content="The beat of life" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<main>
				<TituloPagina titulo="tienda" />
				<section className={cssprod.productos}>
					{
						ladata
							? <Productos info={ladata} />
							: (<img className="loading" style={{ width: "100px", margin: "0 auto", display: "block" }} src="https://codigofuente.io/wp-content/uploads/2018/09/progress.gif" alt="Cargando ..." />)
					}
				</section>
			</main>
			<Footer />
		</>
	);
}
export default Tienda;
