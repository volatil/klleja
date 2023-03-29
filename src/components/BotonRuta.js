import Link from "next/link";
import estilo from "@/styles/BotonRuta.module.css";

function BotonRuta(props) {
	const { texto, ruta, width } = props;

	return (
		<Link style={{ width: `${width}` }} className={estilo.botonComponent} href={ruta || "/"}>
			<p>{texto}</p>
			<img src="/assets/svg/arrowright.svg" alt={texto} />
		</Link>
	);
}
export default BotonRuta;
