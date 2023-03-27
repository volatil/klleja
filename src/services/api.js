import API from "@/helpers/CONST";

const trae = function () {
	return new Promise((resolve) => {
		fetch( API ).then((value) => value.json()).then((value) => {
			resolve(value);
		});
	});
};

const imprime = async function () {
	console.debug( "llamando" );
	const dataDB = await trae();
	console.debug( "recibiendo" );
	console.debug( dataDB ? "si hay data" : "no hay data" );
	console.debug( dataDB );
	return dataDB;
};
export default imprime;

// imprime()
