import {connect} from 'react-redux';
import ListPerson from '../components/ListPerson.js';

const mapStateRoProps = state => {
	const props = {
		user: state.user,
	}
}
export default connect(mapStateToProps)(ListPerson);
