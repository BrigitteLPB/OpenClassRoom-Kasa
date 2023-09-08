import { Link } from 'react-router-dom'
import Header from 'components/common/header';

function PageNotFound(){
	return (
		<div>
			<Header/>
			<h1>
				404
			</h1>
			<Link to="/">Accueil</Link>
		</div>
	);
}

export default PageNotFound;
