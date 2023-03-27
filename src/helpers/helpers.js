import { COMETA } from "./CONST";

const precio = function ( precioneto ) {
	let elprecio = Number(precioneto) + Number(COMETA);
	elprecio = elprecio.toLocaleString("es-CL");
	return elprecio;
};
export default precio;
