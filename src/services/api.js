import { API } from "@/helpers/CONST";

async function trae() {
	const traido = await fetch(API);
	const data = await traido.json();
	return data.values;
}
