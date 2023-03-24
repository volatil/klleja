import Head from "next/head";

import Header from "@/components/Header";
import Boton from "@/components/Boton";

function ubicacion() {
	return (
		<>
			<Head>
				<title>KLLEJA | The beat of life</title>
				<meta name="description" content="The beat of life" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<h2>UBICACION</h2>
			<div>
				<iframe title="mapa" style={{ border: "none", width: "100%" }} src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13415.269838936052!2d-70.5859866!3d-32.79709905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2scl!4v1679626498491!5m2!1ses-419!2scl" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
			</div>
			{/* <Boton texto="volver al home" ruta="/" /> */}
		</>
	);
}
export default ubicacion;
