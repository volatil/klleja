import css from "@/styles/TituloPagina.module.css";

const TituloPagina = function (props) {
	const { titulo } = props;

	return (
		<section id={css.titulopagina}>
			<h2>{titulo}</h2>
		</section>
	);
};
export default TituloPagina;
