import {connect} from 'react-redux';
import addUser from '../action/adduser';
import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';

class FormAdd extends Component {
	render(){
 		const { handleSubmit, pristine, reset, submitting } = this.props;
		//console.log(this.props);
 		const submit = (values)=>{this.props.onClicker(values.users);reset()}
	 	return (
		<div>	
    	<form onSubmit={handleSubmit(submit)}>
      	<div>
        	<label>First Name</label>
        	<div>
          	<Field
            	name="users"
            	component="input"
            	type="text"
            	placeholder="user"
          	/>
        	</div>
      	</div>
     
      	<div>
        	<button type="submit">
          	Submit
        	</button>
      	</div>
			</form></div>
		)
	}
}

const UsersAdd = reduxForm({
  form: 'FormAdd' // a unique identifier for this form
})(FormAdd)

function mapDispatchToProps(dispatch){
	return {onClicker: (user) => dispatch(addUser(user))}
	
}


function mapStateToProps(state){
	let props = {
		users: state.users.users,
	};
	return props;
}



const list = connect(
	mapStateToProps,
	mapDispatchToProps,
)(UsersAdd);

export default list;
