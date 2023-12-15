import Link from "next/link";
import { precio } from "@/helpers/helpers";

import cssprod from "@/styles/GrillaProductos.module.css";

function Productos(props) {
	const { cantidad, info } = props;
	const cantProductos = cantidad || 4;
	const todo = [];

	for ( let count = 1; count <= cantProductos; count++ ) {
		const p = {
			id: info[count][0],
			nombre: info[count][2],
			precio: precio(info[count][3]),
			imagen: info[count][6],
			descripcion: info[count][7],
		};
		todo.push( p );
	}

	return (
		<div className={cssprod.productos}>
			{
				todo.map((producto) => {
					const prod = {
						id: producto.id,
						nombre: producto.nombre,
						precio: producto.precio,
						imagen: producto.imagen,
						descripcion: producto.descripcion,
					};
					return (
						<Link href={`/producto/${[prod.id]}/${[prod.nombre]}`} className={cssprod.producto} key={prod.id}>
							<img src={prod.imagen} alt="imagen" />
							<p>{prod.nombre}</p>
							<p className={cssprod.precio}>$ {prod.precio}</p>
						</Link>
					);
				})
			}
		</div>
	);
}
export default Productos;
