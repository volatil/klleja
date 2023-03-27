import { useState, useEffect } from "react";
import css from "@/styles/LosMasVendidos.module.css";

import API from "@/helpers/CONST";
import Boton from "./Boton";

function Productos(props) {
	const { info } = props;
	const todo = [];
	for ( let count = 1; count <= 2; count++ ) {
		const p = {
			id: info[count][0],
			marca: info[count][2],
			modelo: info[count][3],
			imagen: String(info[count][7]).replaceAll("./", "/"),
		};
		todo.push( p );
	}
	console.debug( todo );

	return (
		<>
			<p>SIII</p>
			<div style={{ display: "flex" }}>
				{
					todo.map((producto) => {
						const prod = {
							id: producto.id,
							marca: producto.marca,
							modelo: producto.modelo,
							imagen: producto.imagen,
						};
						return (
							<div>
								<img style={{ width: "150px" }} key={prod.id} src={`https://clickzapatilla.cl${prod.imagen}`} alt="imagen" />
								<p>{prod.marca}</p>
								<p>{prod.modelo}</p>
							</div>
						);
					})
				}
			</div>
		</>
	);
}

const LosMasVendidos = function () {
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
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<section id="losmasvendidos" className={css.losmasvendidos}>
				<div>
					<h5>los más vendidos</h5>
					<p>Nos preocupamos obsesivamente por cada detalle de nuestros hoodies, para que se ajuste y se sientan mejor que cualquier otro hoodie que hayas usado.</p>
					<Boton width="400px" texto="ver los más vendidos" ruta="/tienda" />
				</div>
				<div className={css.productos}>
					<h4>PRODUCTOS</h4>
					{ladata ? <Productos info={ladata} /> : "no"}
				</div>
			</section>
		</>
	);
};
export default LosMasVendidos;
