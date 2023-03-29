import bread from "@/styles/Breadcrumb.module.css";

function Breadcrumb(params) {
	return (
		<ul id={bread.breadcrumb}>
			<li>tienda</li>
			<li>categoria</li>
			<li>producto</li>
		</ul>
	);
}
export default Breadcrumb;
