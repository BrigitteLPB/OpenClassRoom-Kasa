function Carousel({picture_urls}){
	return (
		picture_urls.map(url => (
			<img key={url} src={url} alt="" style={{
				with: "100px",
				height: "100px"
			}} />
		))
	);
}

export default Carousel;
