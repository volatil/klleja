import Link from "next/link";
import bread from "@/styles/Breadcrumb.module.css";

function Breadcrumb(props) {
	const { nombreproducto } = props;

	return (
		<ul id={bread.breadcrumb}>
			<li>
				<Link href="/tienda">tienda</Link>
			</li>
			<img src="/assets/svg/arrowrightbreadcrumb.svg" width="5" height="23" alt="asdasd" />
			{/* <li>categoria</li> */}
			<li>{nombreproducto}</li>
		</ul>
	);
}
export default Breadcrumb;
