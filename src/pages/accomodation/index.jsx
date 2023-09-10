import { useParams } from 'react-router-dom'

function Accomodation() {
    const { accomodation_id } = useParams()

	return (
		<div>
			Accomodation : {accomodation_id}
		</div>
	);
}

export default Accomodation;
