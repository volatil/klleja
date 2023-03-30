function Buscador(props) {
	const { desplegarMenu } = props;
	return (
		<div>
			<img src={desplegarMenu ? "/assets/svg/lupaAbierto.svg" : "/assets/svg/lupaCerrado.svg"} width="40" height="40" alt="Buscar" />
		</div>
	);
}
export default Buscador;
