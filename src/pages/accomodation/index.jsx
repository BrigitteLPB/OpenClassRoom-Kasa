import { useParams } from 'react-router-dom'

function Accomodation() {
    const { accomodation_id } = useParams()

	return (
		<h1>
			Accomodation : {accomodation_id}
		</h1>
	);
}

export default Accomodation;
