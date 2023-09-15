import Collapse from "components/common/collapse"

import image from "assets/kalen-emsley-Bkci_8qcdvQ.png"
import "style/pages/about.scss"

function About() {
	return (
		<div id="page-about" className="page-wrapper">
			<div className="img-wrapper">
				<img src={image} alt="A propos" />
				<span className="img-over"/>
			</div>
			<div className="collapse-wrapper">
				<Collapse title="Fiabilité">
					<p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
				</Collapse>
				<Collapse title="Respect">
					<p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
				</Collapse>
				<Collapse title="Service">
					<p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
				</Collapse>
				<Collapse title="Sécurité">
					<p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
				</Collapse>
			</div>
		</div>
	);
}

export default About;
