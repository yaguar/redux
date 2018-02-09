import {connect} from 'react-redux';
import FormAdd from '../components/FormAdd.js';
import addUser from '../action/adduser';

function mapDispatchToProps(dispatch){
	return {onClicker: (user) => dispatch(addUser(user))}
	
}

const list = connect(
	mapDispatchToProps,
)(FormAdd);

export default list;
