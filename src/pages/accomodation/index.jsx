import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import "style/pages/accomodation.scss";
import Carousel from "components/carousel";
import Collapse from "components/common/collapse";
import Tags from "components/tags";
import Rating from "components/rating";

function Accomodation() {
	const naviguate = useNavigate();

	const { accomodation_id } = useParams();
	const [logement, set_logement] = useState();

	useEffect(() => {
		fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/accomodation/${accomodation_id}`)
			.then((response) => (response.status === 200)? response.json() : naviguate("/404"))
			.then((response) => set_logement(response))
			.catch((err) => console.log(err))
	}, [])

	return (
		(logement) ? (
			<div id="accomodation">
				<Carousel picture_urls={logement.pictures}/>
				<div className="accomodation-info-wrapper">
					<h1 className="text-primary-36px-desktop text-primary-18px-mobile">{logement.title}</h1>
					<p className="text-primary-18px-desktop text-primary-14px-mobile">{logement.location}</p>
					<Tags tags={logement.tags}/>
				</div>
				<div className="host-info-wrapper">
					<Rating max_rating={5} rating_number={logement.rating}/>
					<div className="host-personal-info-wrapper">
						<p className="text-primary-18px-desktop text-primary-12px-mobile">{logement.host.name}</p>
						<img className="host-image" src={logement.host.picture} alt="" />
					</div>
				</div>
				<div className="accomodation-collapse-wrapper">
					<Collapse title="Description">
						<p>{logement.description}</p>
					</Collapse>
					<Collapse title="Équipements">
						{logement.equipments.map(equipment => (
							<p key={`accomodation-equipment-${equipment}`}>{equipment}</p>
						))}
					</Collapse>
				</div>
			</div>
		) : null
	);
}

export default Accomodation;
