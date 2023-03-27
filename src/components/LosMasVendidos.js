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
			{
				todo.map((producto) => {
					const prod = {
						id: producto.id,
						marca: producto.marca,
						modelo: producto.modelo,
						imagen: producto.imagen,
					};
					return (
						<div key={prod.id}>
							<img style={{ width: "150px" }} src={`https://clickzapatilla.cl${prod.imagen}`} alt="imagen" />
							<p>{prod.marca}</p>
							<p>{prod.modelo}</p>
						</div>
					);
				})
			}
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
				<div className={css.mensaje}>
					<h5>los más vendidos</h5>
					<p>Nos preocupamos obsesivamente por cada detalle de nuestros hoodies, para que se ajuste y se sientan mejor que cualquier otro hoodie que hayas usado.</p>
					<Boton texto="ver los más vendidos" ruta="/tienda" />
				</div>
				<div className={css.productos}>
					{ladata ? <Productos info={ladata} /> : (<img className="loading" style={{ width: "100px", margin: "0 auto", display: "block" }} src="https://codigofuente.io/wp-content/uploads/2018/09/progress.gif" alt="Cargando ..." />)}
				</div>
			</section>
		</>
	);
};
export default LosMasVendidos;
