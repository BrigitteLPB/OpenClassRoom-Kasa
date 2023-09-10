import home_banner from "assets/home-banner.png"

import "style/pages/home.scss"
import AccomodationCard from "components/accomodation_card";

function Home() {
	const logement_id = Array.from(Array(9).keys())


	return (
		<div className="page-wrapper" id="home-page">
			<h1 className="home-title text-title" style={{
				backgroundImage: `url(${home_banner})`,
			}}>Chez vous, partout et ailleurs</h1>
			<div className="height-spacer"></div>
			<div className="accomodation-list-wrapper">
				{
					logement_id.map(id => (
						<AccomodationCard logement_data={{
							id: id,
							title: "Titre de la location"
						}}/>
					))
				}
			</div>
		</div>
	);
}

export default Home;
