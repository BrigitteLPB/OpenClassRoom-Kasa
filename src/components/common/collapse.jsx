import "style/components/common/collapse.scss"


function Collapse({title, children}){
	function update_content(event){
		const element = event.currentTarget;
		element.classList.toggle("active");
		const content_element = element.nextSibling;

		content_element.classList.toggle("open");
	}

	return (
		<div className="collapse">
			<button onClick={update_content} className="text-normal">{title}</button>
			<div className="content">{children}</div>
		</div>
	);
}


export default Collapse;
