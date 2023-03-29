import { useState } from "react";
import desp from "@/styles/Desplegable.module.css";

function Desplegable(props) {
	const [desplegando, setdesplegando] = useState(false);
	const { titulo, children } = props;

	function handleClick() {
		setdesplegando(!desplegando);
	}

	return (
		<div className={desp.desplegable}>
			<div className={desp.titulo} role="presentation" onClick={handleClick}>
				<p>{titulo}</p>
				<img src="/assets/svg/arrowdown.svg" alt="desplegar" />
			</div>
			{ desplegando && (<div className={desp.contenido}>{children}</div>) }
		</div>
	);
}
export default Desplegable;
