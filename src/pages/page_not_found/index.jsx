import { Link } from 'react-router-dom'

function PageNotFound(){
	return (
		<div>
			<h1>
				404
			</h1>
			<Link to="/">Accueil</Link>
		</div>
	);
}

export default PageNotFound;
