import {connect} from 'react-redux';
import addUser from '../action/adduser';
import React, {Component} from 'react';
import { Field, reduxForm, isInvalid } from 'redux-form';
//import {method_post} from './function/functions';

const validate = values => {
  const errors = {}
   
  if (!values.first_name) {
    errors.first_name = 'Это обязательное поле!'
  } else if (values.first_name.length > 20) {
    errors.first_name = 'Не больше 20 сомволов!'
  } else if (!/^[A-Za-zА-Яа-яЁё]+$/i.test(values.first_name)) {
    errors.first_name = 'Некорректные символы!'
  }


  if (!values.last_name) {
    errors.last_name = 'Это обязательное поле!'
  } else if (values.last_name.length > 20) {
    errors.last_name = 'Не больше 20 символов!'
  } else if (!/^[A-Za-zА-Яа-яЁё]+$/i.test(values.last_name)) {
    errors.last_name = 'Некорректные символы!'
  }


  if (!values.phone) {
    errors.phone = 'Это обязательное поле!'
  } else if (!/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/i.test(values.phone)) {
    errors.phone = 'Некорректный номер!'
  }
  return errors
}

const renderField = ({ input, label, type, id, meta: { touched, error, invalid} }) => (
  <div class="form-group col-md-4">
    <label for={id}></label>
    <div>
      {label}
      <input {...input} placeholder={label} type={type} id={id} class="form-control" />
      {touched && (error && <div class="nonvalid">{error}</div>)}      
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
    	<form onSubmit={handleSubmit(submit)}>
         <div class="form-row">
          	<Field
            	name="first_name"
              id="first_name" 
            	component={renderField}
            	type="text"
            	label="Имя"
          	/>
          	<Field
            	name="last_name"
              id="last_name"
            	component={renderField}
            	type="text"
            	label="Фамилия"
          	/>
          	<Field
            	name="phone"
              id="phone"
            	component={renderField}
            	type="tel"
            	label="Номер телефона"
          	/>
         </div>
          	<button type="submit" disabled={submitting}  class="btn btn-primary">
            	Добавить
          	</button>
			</form>
      <br/>		
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
