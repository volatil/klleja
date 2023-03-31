import { useState } from "react";
import css from "@/styles/Buscador.module.css";

function Buscador() {
	const [desplegado, setdesplegado] = useState(null);

	const clickMenu = function () {
		console.debug( "asdasdasd" );
		setdesplegado(!desplegado);
		if ( !desplegado ) {
			setTimeout(() => {
				document.querySelector(".inputBuscador").focus();
			}, 50);
		}
	};

	return (
		<>
			<section data-desplegado={desplegado && "si"} id={css.buscador}>
				<img
					role="presentation"
					src="/assets/svg/lupa.svg"
					width="25"
					height="25"
					alt="Buscar"
					onClick={() => { clickMenu(); }}
				/>
				<input className="inputBuscador" type="text" placeholder="Buscar" />
			</section>
			{/* { desplegado ? "si" : "no" } */}
		</>
	);
}
export default Buscador;
