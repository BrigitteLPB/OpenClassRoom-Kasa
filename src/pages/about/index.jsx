import Collapse from "components/common/collapse"

import image from "assets/kalen-emsley-Bkci_8qcdvQ.png"
import "style/pages/about.scss"
import about_texts from 'assets/about-texts.json';

function About() {
	return (
		<div id="page-about">
			<div className="img-wrapper">
				<img src={image} alt="A propos" />
				<span className="img-over"/>
			</div>
			<div className="collapse-wrapper">
				{
					about_texts.map((data) => {
						if ("name" in data && "text" in data){
							return (
								<Collapse title={data["name"]}>
									<p>{data["text"]}</p>
								</Collapse>
							)
						}
						return null;
					})
				}
			</div>
		</div>
	);
}

export default About;
