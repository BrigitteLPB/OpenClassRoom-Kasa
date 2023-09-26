import { Link } from "react-router-dom"
import Logo from "components/logo";

import "style/components/common/header.scss"


function Header(){
	return (
		<header className="page-wrapper header-wrapper">
			<Logo></Logo>
			<nav>
				<Link to="/" className="text-primary-24px-desktop text-primary-12px-mobile">Accueil</Link>
				<div className="spacer"></div>
				<Link to="/a-propos" className="text-primary-24px-desktop text-primary-12px-mobile">A propos</Link>
			</nav>
		</header>
	);
}

export default Header;
