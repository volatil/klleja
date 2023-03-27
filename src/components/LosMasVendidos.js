import css from "@/styles/LosMasVendidos.module.css";

import Boton from "./Boton";

const LosMasVendidos = function () {
	return (
		<section id="losmasvendidos" className={css.losmasvendidos}>
			<div>
				<h5>los más vendidos</h5>
				<p>Nos preocupamos obsesivamente por cada detalle de nuestros hoodies, para que se ajuste y se sientan mejor que cualquier otro hoodie que hayas usado.</p>
				<Boton texto="ver los más vendidos" ruta="/tienda" />
			</div>
			<div className={css.productos}>
				<p>PRODUCTOS</p>
			</div>
		</section>
	);
};
export default LosMasVendidos;
