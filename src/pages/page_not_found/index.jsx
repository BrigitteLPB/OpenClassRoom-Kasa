import { Link } from 'react-router-dom'
import "style/pages/page_not_found.scss"

function PageNotFound(){
	return (
		<div id="page-not-found">
			<h1 className='text-primary-288px-desktop text-primary-96px-mobile'>404</h1>
			<h2 className='text-primary-36px-desktop text-primary-18px-mobile'>Oups! La page que vous demandez n'existe pas.</h2>
			<Link to="/" className="text-primary-18px-desktop text-primary-14px-mobile">Retourner sur la page d’accueil</Link>
		</div>
	);
}

export default PageNotFound;
