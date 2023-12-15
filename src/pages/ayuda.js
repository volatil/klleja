import Head from "next/head";

import { HEAD } from "@/helpers/CONST";

import ayuda from "@/styles/Ayuda.module.css";

import Header from "@/components/Header";
import TituloPagina from "@/components/TituloPagina";
import Footer from "@/components/Footer";

function Ayuda() {
	return (
		<>
			<Head>
				<title>AYUDA | KLLEJA</title>
				<meta name="description" content={HEAD.description} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />

				<meta name="title" content={HEAD.titleAll} />

				<meta property="og:type" content="website" />
				<meta property="og:url" content={HEAD.url} />
				<meta property="og:title" content={HEAD.titleAll} />
				<meta property="og:description" content={HEAD.description} />
				<meta property="og:image" content={HEAD.image} />

				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content={HEAD.url} />
				<meta property="twitter:title" content={HEAD.titleAll} />
				<meta property="twitter:description" content={HEAD.description} />
				<meta property="twitter:image" content={HEAD.image} />
			</Head>
			<Header />
			<main>
				<TituloPagina titulo="ayuda" />
				<div className={ayuda.contenedor}>
					<div>
						<h3>¿Cómo hago una compra?</h3>
						<p>Te dejamos los pasos para hacer una compra en nuestra página web :</p>
						<ol>
							<li>Elegí la categoría que estás buscando</li>
							<li>Seleccionás tus preferencias de talle y hacés click en AGREGAR AL CARRITO.🛒</li>
							<li>Una vez que estás en el carrito de compras, podés seguir comprando o avanzar haciendo click en INICIAR COMPRA.</li>
							<li>Completa tus datos de contacto y hacé click en CONTINUAR.</li>
							<li>Seleccioná el método de envío que desees y hacé clic en CONTINUAR 🚚. Recordá que si elegís retirar de nuestros locales, tu producto estará disponible a partir de las 48hs de realizada la compra. </li>
							<li>Elegí el método de pago y completá los datos. Hacé click en INICIAR PAGO. 💳</li>
							<li>Listo! Vas e recibir el mail de confirmación de compras en tu e-mail! En caso de no recibirlo te pedimos que revises la casilla de correo no deseado, spam o promociones 😉.</li>
						</ol>
						<p>➡️ Cualquier consulta podes hacerla por DM por nuestro instagram @klleja.</p>
					</div>

					<div>
						<h3>¿Cuáles son los métodos de pago?</h3>
						<p>Para las compras online, contamos con todas las tarjetas de créditos, débito, Mercado Pago y pagos en efectivo.</p>
					</div>

					<div>
						<h3>¿Cómo me tomo mis medidas?</h3>
						<img src="https://lh6.googleusercontent.com/1AMij7mDix2G2927WjNhFSZluzfXKcc1h7VWI1tiljLw4NZINEIIl4IkBOxtcd3S5VMqoktxozO3IBDpIQ45ZNROTm04O1tABSkbJGPHglZGwXdv0VhMiqOTb4Q67VW5IVz7cDjOILZD8eMjsXKPDUCdWhcQ9xlBCibFJ2GR9KmA0YG8_fl1-QgaEg" alt="Medidas" />
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
export default Ayuda;
