import { useState, useEffect } from "react";
import css from "@/styles/LosMasVendidos.module.css";

import API from "@/helpers/CONST";
import Boton from "./Boton";

function Productos(props) {
	const { info } = props;
	const todo = [];
	for ( let count = 1; count <= 2; count++ ) {
		const p = {
			imagen: String(info[count][7]).replaceAll("./", "/"),
		};
		todo.push( p.imagen );
	}
	console.debug( todo );

	return (
		<>
			<p>SIII</p>
			{
				todo.map((imagen) => {
					const completo = imagen;
					return (<img key={completo} src={`https://clickzapatilla.cl${completo}`} alt="imagen" />);
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
			// console.debug( "recibiendo" );
			// console.debug(data.values);
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
