import { useState, useEffect } from "react";
import "style/components/carousel.scss"

function Carousel({ picture_urls }) {
	const [image_index_selected, set_image_index] = useState(0);

	useEffect(() => {
		for (let image of document.getElementById('image-wrapper').children) {
			if (!image.id.endsWith(image_index_selected)) {
				image.classList.add("image-hide");
			} else {
				image.classList.remove("image-hide");
			}
		}
	}, [image_index_selected])

	return (
		<div className="carousel">
			<div id="image-wrapper">
				{
					picture_urls.map((url, i) => (
						<img key={`carousel-image-${i}`} id={`carousel-image-${i}`} src={url} alt="" />
					))
				}
			</div>
			<button className="carousel-hud" id="carousel-prev-button" onClick={() => { set_image_index((image_index_selected - 1 < 0) ? picture_urls.length - image_index_selected - 1 : image_index_selected - 1) }}>
				<svg width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white" />
				</svg>
			</button>
			<button className="carousel-hud" id="carousel-next-button" onClick={() => { set_image_index((image_index_selected + 1) % picture_urls.length) }}>
				<svg width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="white" />
				</svg>
			</button>
			<p className="carousel-hud text-normal" id="image-count-display">{image_index_selected + 1}/{picture_urls.length}</p>
		</div>
	);
}

export default Carousel;
