import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import "style/pages/accomodation.scss";
import Carousel from "components/carousel";
import Collapse from "components/common/collapse";

function Accomodation() {
	const naviguate = useNavigate();

	const { accomodation_id } = useParams();
	const [logement, set_logement] = useState();

	useEffect(() => {
		fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/accomodation/${accomodation_id}`)
			.then((response) => (response.status == 200)? response.json() : naviguate("/404"))
			.then((response) => set_logement(response))
			.catch((err) => console.log(err))
	}, [])

	return (
		(logement) ? (
			<div>
				<Carousel picture_urls={logement.pictures}/>
				<p>title: {logement.title}</p>
				<p>location: {logement.location}</p>
				<div>
					<p>tags :</p>
					{logement.tags.map(tag => (
						<p key={`accomodation-tag-${tag}`}>{tag}</p>
					))}
				</div>
				<div>
					<p>host :</p>
					<p>Name: {logement.host.name}</p>
					<img src={logement.host.picture} alt="" />
				</div>
				<Collapse title="Équipements">
					{logement.equipments.map(equipment => (
						<p key={`accomodation-equipment-${equipment}`}>{equipment}</p>
					))}
				</Collapse>
				<Collapse title="Description">
					<p>{logement.description}</p>
				</Collapse>
			</div>
		) : null
	);
}

export default Accomodation;
