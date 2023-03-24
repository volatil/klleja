import { useRouter } from "next/router";
import estilo from "@/styles/Boton.module.css";

function Boton(props) {
	const { texto } = props;
	const router = useRouter();

	return (
		<button className={estilo.botonComponent} type="button" onClick={() => router.push("/ubicacion")}>
			<p>{texto}</p>
			<img src="/assets/svg/arrowright.svg" alt={texto} />
		</button>
	);
}
export default Boton;
