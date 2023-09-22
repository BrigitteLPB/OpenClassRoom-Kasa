import "style/components/tags.scss"

function Tags({tags}) {
	return (
		<div className="tags-wrapper">
			{(typeof(tags) == typeof([]))? (
				tags.map(tag_name => (
					<p className="tag-item text-normal">{tag_name}</p>
				))
			) : (<p className="tag-item text-normal">{tags}</p>)}
		</div>
	)
}

export default Tags;
