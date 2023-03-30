import { COMETA } from "./CONST";

export const precio = function ( precioneto ) {
	let elprecio = Number(precioneto) + Number(COMETA);
	elprecio = elprecio.toLocaleString("es-CL");
	return elprecio;
};

export const urlBONITA = function (url) {
	let urlbonita = url;
	urlbonita = urlbonita.replaceAll(" ", "-");
	urlbonita = urlbonita.replaceAll("á", "a");
	urlbonita = urlbonita.replaceAll("é", "e");
	urlbonita = urlbonita.replaceAll("í", "i");
	urlbonita = urlbonita.replaceAll("ó", "o");
	urlbonita = urlbonita.replaceAll("ú", "u");
	return urlbonita.toLowerCase();
};
