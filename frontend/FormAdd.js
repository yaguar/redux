import {connect} from 'react-redux';
import React, {Component} from 'react';

import { Field, reduxForm } from 'redux-form'

class FormAdd extends Component {
	render(){
 		const { handleSubmit, pristine, reset, submitting } = this.props
 		const submit = (values)=>{console.log(values);this.props.reset();}
	 	return (
    	<form onSubmit={handleSubmit(submit)}>
      	<div>
        	<label>First Name</label>
        	<div>
          	<Field
            	name="firstName"
            	component="input"
            	type="text"
            	placeholder="First Name"
          	/>
        	</div>
      	</div>
      	<div>
        	<label>Last Name</label>
        	<div>
          	<Field
            	name="lastName"
            	component="input"
            	type="text"
            	placeholder="Last Name"
          	/>
        	</div>
      	</div>
      	<div>
        	<label>Phone</label>
        	<div>
          	<Field
            	name="phone"
            	component="input"
            	type="text"
            	placeholder="phone"
          	/>
        	</div>
      	</div>
     
      	<div>
        	<button type="submit" >
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
