function Buscador(props) {
	const { desplegarMenu } = props;
	return (
		<div>
			<img style={{ width: "40px" }} src={desplegarMenu ? "/assets/svg/lupaAbierto.svg" : "/assets/svg/lupaCerrado.svg"} alt="Buscar" />
		</div>
	);
}
export default Buscador;
