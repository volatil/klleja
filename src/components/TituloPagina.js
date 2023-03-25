const TituloPagina = function (props) {
	const { titulo } = props;

	return (
		<section style={{
			background: "radial-gradient(circle, rgba(239,250,255,1) 0%, rgba(217,231,255,1) 100%)",
			height: "90px",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			fontSize: "2.2em",
			letterSpacing: "0.05em",
		}}
		>
			<h2 style={{ color: "#05779a", textTransform: "uppercase" }}>{titulo}</h2>
		</section>
	);
};
export default TituloPagina;
