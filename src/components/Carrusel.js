import Boton from "./Boton";

function scrollTo() {
	const element = document.getElementById("losmasvendidos");
	element.scrollIntoView({ behavior: "smooth" });
}

function Carrusel() {
	return (
		<section id="carrusel" style={{ position: "relative" }}>
			<div style={{
				display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", zIndex: "1", position: "absolute", width: "100%", height: "100%", gap: "25%",
			}}
			>
				<div style={{
					display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",
				}}
				>
					<h2 style={{
						fontSize: "10em", letterSpacing: "0.05em", fontWeight: "300", color: "white",
					}}
					>VISÍTANOS
					</h2>
					<Boton texto="ver ubicación" ruta="/ubicacion" />
				</div>
				<div role="presentation" style={{ cursor: "pointer", marginBottom: "60px" }} onClick={() => scrollTo()}>
					<img style={{ width: "30px" }} src="assets/svg/arrowScrollDown.svg" alt="bajar" />
				</div>
			</div>
			<div>
				<video style={{ width: "100%", height: "100%" }} width="320" height="240" autoPlay muted loop>
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
