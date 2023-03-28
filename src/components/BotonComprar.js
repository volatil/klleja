import Link from "next/link";
import estilo from "@/styles/Boton.module.css";

function BotonComprar(props) {
	const {
		texto, width, id, nombre,
	} = props;
	const data = {
		numero: "56996336330",
		mensaje: `hola estoy interesado en ${nombre} (id: ${id})`,
	};
	const ruta = `https://api.whatsapp.com/send?phone=${data.numero}&text=${data.mensaje}`;

	return (
		<Link style={{ width: `${width}` }} className={estilo.botonComponent} href={ruta}>
			<p>{texto || "propiedad 'texto' ?"}</p>
		</Link>
	);
}
export default BotonComprar;
