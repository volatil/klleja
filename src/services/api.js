import API from "@/helpers/CONST";

const trae = function () {
	return new Promise((resolve) => {
		fetch( API ).then((value) => value.json()).then((value) => {
			resolve(value);
		});
	});
};

const imprime = async function () {
	const dataDB = await trae();
	return dataDB;
};
export default imprime;

// imprime()
