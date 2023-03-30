import Link from "next/link";

function Logo() {
	return (
		<Link href="/">
			<img style={{ height: "auto" }} src="/assets/images/logo.png" width="114" height="90" alt="KLLJA" />
		</Link>
	);
}
export default Logo;
