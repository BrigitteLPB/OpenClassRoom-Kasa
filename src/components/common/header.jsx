import { Link, useLocation } from "react-router-dom"
import Logo from "components/common/logo";

import "style/components/common/header.scss"


function Header(){
	const location = useLocation();

	return (
		<header className="page-wrapper header-wrapper">
			<Logo/>
			<nav>
				<Link to="/" className={`text-primary-24px-desktop text-primary-18px-mobile ${location.pathname == "/" ? "select-nav" : ""}`}>Accueil</Link>
				<div className="spacer"></div>
				<Link to="/a-propos" className={`text-primary-24px-desktop text-primary-18px-mobile ${location.pathname == "/a-propos" ? "select-nav" : ""}`}>A propos</Link>
			</nav>
		</header>
	);
}

export default Header;
