import { Link } from "react-router-dom"
import logo from "assets/LOGO.svg"

import "style/common/header.scss"


function Header(){
	return (
		<header className="header-wrapper">
			<img src={logo} alt="Kasa" />
			<nav>
				<Link to="/" className="text-normal">Accueil</Link>
				<div className="spacer"></div>
				<Link to="/a-propos" className="text-normal">A propos</Link>
			</nav>
		</header>
	);
}

export default Header;
