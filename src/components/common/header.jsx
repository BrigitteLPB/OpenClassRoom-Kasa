import { Link } from "react-router-dom"
import Logo from "components/logo";

import "style/components/common/header.scss"


function Header(){
	return (
		<header className="page-wrapper header-wrapper">
			<Logo></Logo>
			<nav>
				<Link to="/" className="text-normal">Accueil</Link>
				<div className="spacer"></div>
				<Link to="/a-propos" className="text-normal">A propos</Link>
			</nav>
		</header>
	);
}

export default Header;
