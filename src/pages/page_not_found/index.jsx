import { Link } from 'react-router-dom'
import "style/pages/page_not_found.scss"

function PageNotFound(){
	return (
		<div id="page-not-found">
			<h1 className='text-title'>404</h1>
			<h2 className='text-title'>Oups! La page que vous demandez n'existe pas.</h2>
			<Link to="/" className="text-normal">Retourner sur la page d’accueil</Link>
		</div>
	);
}

export default PageNotFound;
