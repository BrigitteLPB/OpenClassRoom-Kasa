import "style/components/common/collapse.scss"


function Collapse({ title, children }) {
	function update_content(event) {
		const element = event.currentTarget;
		element.classList.toggle("active");

		const content_element = element.nextSibling;
		content_element.classList.toggle("open");

		const arrow_element = element.children[1]
		arrow_element.classList.toggle("arrow-rotate")
	}

	return (
		<div className="collapse">
			<button onClick={update_content} className="text-primary-18px-desktop text-primary-13px-mobile">
				<span>{title}</span>
				<svg className="arrow-icon" width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M13.2103 13.2103C12.5409 13.8798 11.4538 13.8798 10.7843 13.2103L0.502064 2.92806C-0.167355 2.25864 -0.167355 1.17151 0.502064 0.502089C1.17148 -0.167331 2.25862 -0.167331 2.92804 0.502089L12 9.57405L21.072 0.507444C21.7414 -0.161975 22.8285 -0.161975 23.4979 0.507444C24.1674 1.17686 24.1674 2.264 23.4979 2.93342L13.2157 13.2157L13.2103 13.2103Z" fill="white" />
				</svg>
			</button>
			<div className="content text-primary-18px-desktop text-primary-13px-mobile">{children}</div>
		</div>
	);
}


export default Collapse;
