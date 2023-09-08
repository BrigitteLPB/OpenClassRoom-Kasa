import { useParams } from 'react-router-dom'
import Header from 'components/common/header';

function Accomodation() {
    const { accomodation_id } = useParams()

	return (
		<div>
			<Header/>
			Accomodation : {accomodation_id}
		</div>
	);
}

export default Accomodation;
