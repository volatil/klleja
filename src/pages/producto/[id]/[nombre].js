import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import { API } from "@/helpers/CONST";
import precio from "@/helpers/helpers";

import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import BotonComprar from "@/components/BotonComprar";
import Footer from "@/components/Footer";

import detalle from "@/styles/Detalle.module.css";

// export async function getServerSideProps() {
// 	// Fetch data from external API
// 	const res = await fetch("https://.../data");
// 	const data = await res.json();

// 	// Pass data to the page via props
// 	return { props: { data } };
// }

const UISelect = function (props) {
	const { data, valorinicial } = props;
	return (
		<>
			<br />
			<br />
			<br />
			<ul>
				<li>{valorinicial}</li>
				{
					data.map((valor) => {
						return (<li key={valor}>{valor}</li>);
					})
				}
			</ul>
			<br />
			<br />
			<br />
			<br />
		</>
	);
};

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
			<Breadcrumb />
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
						<UISelect data={p.tallas} valorinicial="Selecciona tu talla" />
					</div>
					<div className={detalle.precio}>
						<p>$ {p.precio}</p>
					</div>
					<BotonComprar texto="COMPRAR" id={p.id} nombre={p.nombre} />
					<div className={detalle.descripcion}>
						<strong>DESCRIPCION</strong>
						<p>{p.descripcion}</p>
					</div>
					<div className={detalle.envioydevoluciones}>
						<strong>Envío y devoluciones</strong>
						<p>Envío estándar por Chilexpress.</p>
						<p>El periodo de entrega para el producto personalizado es de 7 a 14 días.</p>
						<p>Los plazos de devolución son de 30 días desde la confirmación de la entrega del producto.</p>
					</div>
					<div className={detalle.categorias}>
						<strong>CATEGORIAS</strong>
						<ul>
							{
								p.categorias.map((categoria) => {
									return (
										<li key={categoria}>{categoria}</li>
									);
								})
							}
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

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
		}
		console.debug( "test repeticion" );
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
				{
					ladata
						? <Producto info={ladata} />
						: (<img className="loading" style={{ width: "100px", margin: "0 auto", display: "block" }} src="https://codigofuente.io/wp-content/uploads/2018/09/progress.gif" alt="Cargando ..." />)
				}
			</main>
			<Footer />
		</>
	);
};
export default Detalle;
