import { useState, useEffect } from "react";

import Boton from "./BotonRuta";
import Productos from "./Productos";

import { API } from "@/helpers/CONST";

import css from "@/styles/LosMasVendidos.module.css";

const LosMasVendidos = function () {
	const [ladata, setladata] = useState(null);

	useEffect(() => {
		const trae = async function () {
			const traido = await fetch(API).then((res) => res.json());
			setladata( traido.values );
		};
		trae();
	}, []);

	return (
		<section id="losmasvendidos" className={css.losmasvendidos}>
			<div className={css.mensaje}>
				<h5>los más vendidos</h5>
				<p>Nos preocupamos obsesivamente por cada detalle de nuestros hoodies, para que se ajuste y se sientan mejor que cualquier otro hoodie que hayas usado.</p>
				<Boton texto="ver los más vendidos" ruta="/tienda" />
			</div>
			{ladata ? <Productos info={ladata} /> : (<img className="loading" style={{ width: "100px", margin: "0 auto", display: "block" }} src="/assets/images/loading.webp" alt="Cargando ..." />)}
		</section>
	);
};
export default LosMasVendidos;
