import "style/components/tags.scss"

function Tags({tags}) {
	return (
		<div className="tags-wrapper">
			{(typeof(tags) == typeof([]))? (
				tags.map((tag_name, i) => (
					<p className="tag-item text-primary-14px-desktop text-primary-10px-mobile" key={`tag-${i}`}>{tag_name}</p>
				))
			) : (<p className="tag-item text-primary-14px-desktop text-primary-10px-mobile">{tags}</p>)}
		</div>
	)
}

export default Tags;
