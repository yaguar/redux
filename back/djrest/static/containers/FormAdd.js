import {connect} from 'react-redux';
import addUser from '../action/adduser';
import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
//import {method_post} from './function/functions';

const validate = values => {
  const errors = {}
   
  if (!values.first_name) {
    errors.first_name = 'Required'
  } else if (values.first_name.length > 15) {
    errors.first_name = 'Must be 15 characters or less'
  }

  if (!values.last_name) {
    errors.last_name = 'Required'
  } else if (values.last_name.length > 15) {
    errors.last_name = 'Must be 15 characters or less'
  }

  if (!values.phone) {
    errors.phone = 'Required'
  } /*else if (!/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/i.test(values.phone)) {
    errors.phone = 'Invalid phone number'
  }*/
  return errors
}

const renderField = ({ input, label, type, meta: { touched, error} }) => (
  <div class="form-group row">
    <label for={name} class="col-sm-4 col-form-label"></label>
    <div class="col-sm-4">
      {label}
      <input {...input} placeholder={label} type={type} id={name} class="form-control"/>
      {touched && (error && <div class="invalid-feedback">{error}</div>)}
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
    	<form onSubmit={handleSubmit(submit)} >
          	<Field
            	name="first_name"
            	component={renderField}
            	type="text"
            	label="Имя"
          	/>
          	<Field
            	name="last_name"
            	component={renderField}
            	type="text"
            	label="Фамилия"
          	/>
          	<Field
            	name="phone"
            	component={renderField}
            	type="tel"
            	label="Номер телефона"
          	/>
      	<div class="form-group row">
        	<button type="submit" disabled={submitting}  class="btn btn-primary">
          	Submit
        	</button>
      	</div>
			</form>
		
	</div>
		)
	}
}

const UsersAdd = reduxForm({
  form: 'FormAdd', // a unique identifier for this form
  validate
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
