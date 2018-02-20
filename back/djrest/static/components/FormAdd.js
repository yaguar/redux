
import React, {Component} from 'react';
import addUser from '../action/adduser';
import { Field, reduxForm } from 'redux-form';

class FormAdd extends Component {
	render(){
 		const { handleSubmit, pristine, reset, submitting } = this.props;
		console.log(this.props);
 		const submit = (values)=>{handleSubmit(values.users);this.props.reset();}
	 	return (
    	<form onSubmit={submit}>
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
			</form>
		)
	}
}

export default reduxForm({
  form: 'FormAdd' // a unique identifier for this form
})(FormAdd)
