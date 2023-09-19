import { Link } from "react-router-dom";
import "style/components/accomodation_card.scss"

function AccomodationCard({logement_data}){
	return (
		<Link to={`/fiche-logement/${logement_data.id}`} key={`accomodation-item-${logement_data.id}`} className="accomodation-item-wrapper">
			<img src={logement_data.cover} alt=""/>
			<span className="img-black-filter"/>
			<h2 className="text-normal accomodation-title">{logement_data["title"]}</h2>
		</Link>
	);
}

export default AccomodationCard;
