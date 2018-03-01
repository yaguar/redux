import {connect} from 'react-redux';
import addUser from '../action/adduser';
import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
//import {method_post} from './function/functions';

class FormAdd extends Component {
	render(){
 		const { handleSubmit, pristine, reset, submitting } = this.props;
		//console.log(this.props);
 		const submit = (values)=>{this.props.onClicker(values);reset()}
		//const submit = (values)=>{console.log(values);reset()}

	 	return (
		<div>	
    	<form onSubmit={handleSubmit(submit)}>
      	<div>
        	<label>First Name</label>
        	<div>
          	<Field
            	name="first_name"
            	component="input"
            	type="text"
            	placeholder="first_name"
          	/>
        	</div>
      	</div>
    		<div>
        	<label>Last Name</label>
        	<div>
          	<Field
            	name="last_name"
            	component="input"
            	type="text"
            	placeholder="last_name"
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
