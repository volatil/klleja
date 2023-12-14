import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

import { API, HEAD } from "@/helpers/CONST";
import { precio } from "@/helpers/helpers";

import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import BotonComprar from "@/components/BotonComprar";
import Footer from "@/components/Footer";

import detalle from "@/styles/Detalle.module.css";
import Desplegable from "@/components/Desplegable";

export async function getServerSideProps() {
	// Fetch data from external API
	const traido = await fetch(API);
	const data = await traido.json();
	const dataFetch = await data.values;

	// Pass data to the page via props
	return { props: { dataFetch } };
}

const Producto = function (props) {
	const { info } = props;
	const p = {
		id: info[0],
		nombre: info[2],
		precio: precio(info[3]),
		tallas: info[4].split(","),
		color: info[5],
		imagen: info[6],
		descripcion: info[7],
		categorias: info[8].split(","),
	};
	return (
		<>
			<Breadcrumb nombreproducto={p.nombre} />
			<div className={detalle.producto}>
				<div className={detalle.imagen}>
					<img src={p.imagen} alt={p.nombre} />
				</div>
				<div className={detalle.informacion}>
					<h5>{p.nombre}</h5>
					<div className={detalle.tallas}>
						<p>Talla</p>
						<select>
							<option value="vacio">Selecciona tu talla</option>
							{
								p.tallas?.map((talla) => {
									return (
										<option key={talla} value={talla}>{talla}</option>
									);
								})
							}
						</select>
					</div>
					<div className={detalle.precio}>
						<p>$ {p.precio}</p>
					</div>
					<BotonComprar texto="COMPRAR" id={p.id} nombre={p.nombre} />
					<Desplegable titulo="DESCRIPCIÓN">{p.descripcion}</Desplegable>
					<Desplegable titulo="Envío y devoluciones">
						<p>Envío estándar por Chilexpress.</p>
						<p>El periodo de entrega para el producto personalizado es de 7 a 14 días.</p>
						<p>Los plazos de devolución son de 30 días desde la confirmación de la entrega del producto.</p>
					</Desplegable>
					<div className={detalle.categorias}>
						<p>
							<strong>Categorias:</strong> {" "}
							{
								p.categorias.map((categoria) => {
									return (
										<span key={categoria}>{categoria}</span>
									);
								})
							}
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

const Detalle = function ({ dataFetch }) {
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
		}
		console.debug( "test repeticion" );
		trae();
	}, [id]);

	return (
		<>
			<Head>
				<title>{nombre} | KLLEJA</title>
				<meta name="description" content="The beat of life" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />

				<meta name="title" content={HEAD.titleAll} />

				<meta property="og:type" content="website" />
				<meta property="og:url" content={HEAD.url} />
				<meta property="og:title" content={HEAD.titleAll} />
				<meta property="og:description" content={HEAD.description} />
				<meta property="og:image" content={dataFetch[id][6]} />

				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content={HEAD.url} />
				<meta property="twitter:title" content={HEAD.titleAll} />
				<meta property="twitter:description" content={HEAD.description} />
				<meta property="twitter:image" content={dataFetch[id][6]} />
			</Head>
			<Header />
			<main>
				{
					ladata
						? <Producto info={ladata} />
						: (<img className="loading" style={{ width: "100px", margin: "0 auto", display: "block" }} src="/assets/images/loading.webp" alt="Cargando ..." />)
				}
			</main>
			<Footer />
		</>
	);
};
export default Detalle;
