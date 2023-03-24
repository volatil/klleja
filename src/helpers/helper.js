import { useRouter } from "next/router";

const rutaBoton = function ( param ) {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const router = useRouter();
	console.debug( param );
	const algo = () => router.push( `${param}` );
	return algo;
};
export default rutaBoton;
