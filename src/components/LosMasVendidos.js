import { useState, useEffect } from "react";

import trae from "@/services/api";
import precio from "@/helpers/helpers";
import Boton from "./Boton";

import css from "@/styles/LosMasVendidos.module.css";
import cssprod from "@/styles/GrillaProductos.module.css";

function Productos(props) {
	const { info } = props;
	const todo = [];
	// for ( let count = 1; count <= info.length - 1; count++ ) {
	for ( let count = 1; count <= 4; count++ ) {
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
						<div className={cssprod.producto} key={prod.id}>
							<img src={prod.imagen} alt="imagen" />
							<p>{prod.nombre}</p>
							<p className={cssprod.precio}>$ {prod.precio}</p>
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
		setladata( trae );
	}, []);

	return (
		<section id="losmasvendidos" className={css.losmasvendidos}>
			<div className={css.mensaje}>
				<h5>los más vendidos</h5>
				<p>Nos preocupamos obsesivamente por cada detalle de nuestros hoodies, para que se ajuste y se sientan mejor que cualquier otro hoodie que hayas usado.</p>
				<Boton texto="ver los más vendidos" ruta="/tienda" />
			</div>
			<div className={cssprod.productos}>
				{ladata ? <Productos info={ladata} /> : (<img className="loading" style={{ width: "100px", margin: "0 auto", display: "block" }} src="https://codigofuente.io/wp-content/uploads/2018/09/progress.gif" alt="Cargando ..." />)}
			</div>
		</section>
	);
};
export default LosMasVendidos;
