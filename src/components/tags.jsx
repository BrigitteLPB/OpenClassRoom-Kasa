import "style/components/tags.scss"

function Tags({tags}) {
	return (
		<div className="tags-wrapper">
			{(typeof(tags) == typeof([]))? (
				tags.map((tag_name, i) => (
					<p className="tag-item text-normal" key={`tag-${i}`}>{tag_name}</p>
				))
			) : (<p className="tag-item text-normal">{tags}</p>)}
		</div>
	)
}

export default Tags;
