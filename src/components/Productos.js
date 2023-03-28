import precio from "@/helpers/helpers";

import cssprod from "@/styles/GrillaProductos.module.css";

function Productos(props) {
	const { info } = props;
	const todo = [];
	// for ( let count = 1; count <= info.length - 1; count++ ) {
	for ( let count = 1; count <= 4; count++ ) {
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
						<div className={cssprod.producto} key={prod.id}>
							<img src={prod.imagen} alt="imagen" />
							<p>{prod.nombre}</p>
							<p className={cssprod.precio}>$ {prod.precio}</p>
						</div>
					);
				})
			}
		</div>
	);
}
export default Productos;
