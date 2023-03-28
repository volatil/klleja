import Boton from "./BotonRuta";

import css from "@/styles/Carrusel.module.css";

function scrollTo() {
	const element = document.getElementById("losmasvendidos");
	element.scrollIntoView({ behavior: "smooth" });
}

function Carrusel() {
	return (
		<section id={css.carrusel}>
			<div className={css.mensaje}>
				<div className={css.izquierda}>
					<h2>VISÍTANOS</h2>
					<Boton texto="ver ubicación" ruta="/ubicacion" />
				</div>
				<div className={css.derecha} role="presentation" onClick={() => scrollTo()}>
					<img src="assets/svg/arrowScrollDown.svg" alt="bajar" />
				</div>
			</div>
			<div>
				<video autoPlay muted loop>
					{/*
						https://pixabay.com/es/videos/search/surf/
						https://pixabay.com/es/videos/tablista-portugal-algarve-costa-13772/
						https://pixabay.com/es/videos/navegar-mar-oceano-onda-playa-36609/
					*/}
					<source src="assets/video/surf.mp4" type="video/mp4" />
					<source src="assets/video/surf.ogg" type="video/ogg" />
				</video>
			</div>
		</section>
	);
}
export default Carrusel;
