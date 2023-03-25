import Link from "next/link";
import estilo from "@/styles/Boton.module.css";

function Boton(props) {
	const { texto, ruta, width } = props;

	return (
		<Link style={{ width: `${width}` }} className={estilo.botonComponent} href={ruta || "/"}>
			<p>{texto}</p>
			<img src="/assets/svg/arrowright.svg" alt={texto} />
		</Link>
	);
}
export default Boton;
