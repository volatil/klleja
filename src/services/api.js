import { API } from "@/helpers/CONST";

async function trae() {
	const traido = await fetch(API);
	let data = await traido.json();
	data = data.values;
	return data;
}
export default trae;
