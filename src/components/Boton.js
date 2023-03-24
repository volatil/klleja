import Link from "next/link";
import estilo from "@/styles/Boton.module.css";

function Boton(props) {
	const { texto, ruta } = props;

	return (
		<Link className={estilo.botonComponent} href={ruta}>
			<p>{texto}</p>
			<img src="/assets/svg/arrowright.svg" alt={texto} />
		</Link>
	);
}
export default Boton;
