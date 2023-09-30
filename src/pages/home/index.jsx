import home_banner from "assets/home-banner.png"
import "style/pages/home.scss"
import AccomodationCard from "components/accomodation_card";

import { useState, useEffect } from "react";

function Home() {
	const [all_logements, set_all_logements] = useState([]);

	useEffect(() => {
		fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/accomodation`)
			.then((response) => response.json())
			.then((response) => set_all_logements(response))
			.catch((err) => console.log(err))
	}, [])

	return (
		<div className="page-wrapper" id="home-page">
			<h1 className="home-title text-tertiary-48px-desktop text-tertiary-24px-mobile" style={{
				backgroundImage: `url(${home_banner})`,
			}}>Chez vous, partout et ailleurs</h1>
			<div className="height-spacer"></div>
			<div className="accomodation-list-wrapper">
				{
					(all_logements)? all_logements.map(logement => (
						<AccomodationCard key={`accomodation-card-${logement.id}`} logement_data={logement} />
					)) : null
				}
			</div>
		</div>
	);
}

export default Home;
