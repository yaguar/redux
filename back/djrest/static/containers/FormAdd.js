import {connect} from 'react-redux';
import addUser from '../action/adduser';
import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
//import {method_post} from './function/functions';

const validate = values => {
  const errors = {}
  if (!values.username) {
    errors.username = 'Required'
  } else if (values.username.length > 15) {
    errors.username = 'Must be 15 characters or less'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.age) {
    errors.age = 'Required'
  } else if (isNaN(Number(values.age))) {
    errors.age = 'Must be a number'
  } else if (Number(values.age) < 18) {
    errors.age = 'Sorry, you must be at least 18 years old'
  }
  return errors
}

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && (error && <span>{error}</span>)}
    </div>
  </div>
)

class FormAdd extends Component {
	render(){
 		const { handleSubmit, pristine, reset, submitting } = this.props;
		//console.log(this.props);
 		const submit = (values)=>{this.props.onClicker(values);reset()}
		//const submit = (values)=>{console.log(values);reset()}

	 	return (
		<div>	
    	<form onSubmit={handleSubmit(submit)} class="needs-validation">
      	<div class="form-group row">
        	<label for="first_name" class="col-sm-4 col-form-label"></label>
        	<div class="col-sm-4">
                First Name
          	<Field
            	name="first_name"
            	component="input"
            	type="text"
            	placeholder="first_name"
                class="form-control" id="first_name"
          	/>
		<div class="invalid-feedback">
        		Please provide a valid city.
      		</div>
        	</div>
      	</div>
    	<div class="form-group row">
        	<label class="col-sm-4 col-form-label">Last Name</label>
        	<div class="col-sm-4">
          	<Field
            	name="last_name"
            	component="input"
            	type="text"
            	placeholder="last_name"
                class="form-control" id="last_name"
   
          	/>
		<div class="invalid-feedback">
        		Please provide a valid city.
      		</div>
        	</div>
      	</div>
    	<div class="form-group row">
        	<label class="col-sm-4 col-form-label">Phone</label>
        	<div class="col-sm-4">
          	<Field
            	name="phone"
            	component="input"
            	type="tel"
            	placeholder="phone"
                class="form-control" id="phone"
          	/>
		<div class="invalid-feedback">
                	Please provide a valid city.
                </div>
        	</div>
      	</div>
     
 
 
      	<div class="form-group row">
        	<button type="submit" class="btn btn-primary">
          	Submit
        	</button>
      	</div>
			</form>
		
	</div>
		)
	}
}

const UsersAdd = reduxForm({
  form: 'FormAdd' // a unique identifier for this form
})(FormAdd)

function method_post(user){
  fetch('/listcontact', {method:'post',headers: {
     'Accept': 'application/json, text/plain, */*',
     'Content-Type': 'application/json'
    }, body:JSON.stringify({
          first_name: user.first_name,
          last_name: user.last_name,
          phone: user.phone
      })})  
    .then(  
      function(response) {  
        if (response.status != 201){  
          console.log('Looks like there was a problem. Status Code: ' +  
            response.status);  
          return 0;  
        }

      // Examine the text in the response  
        
        return 1;  
          
      }  
    )  
    .catch(function(err) {  
      console.log('Fetch Error :-S', err);  
    });
}

function mapDispatchToProps(dispatch){
	return {onClicker: (user) => { if (method_post(user)!=0) {dispatch(addUser(user))}}}
	
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
