import {connect} from 'react-redux';
import FormAdd from '../containers/FormAdd.js';
import React, {Component} from 'react';
import addUser from '../action/adduser';

class App extends Component{
	//const submit = (values)=>{console.log(values);this.props.reset();}
	
	render(){
		const submit = (values)=>{console.log(values);}
	
		//console.log(this.props.users);
		//this.props.onClicker('mylong');
		return (
			<div>

				<FormAdd />
				<ul>
					{this.props.users.map((user, index) =>
						<li key={index}>{user}</li>)}
				</ul>
			</div>
		);
	}
}

function mapStateToProps(state){
	let props = {
		users: state.users,
	};
	return props;
}

function mapDispatchToProps(dispatch){
	return {onClicker: (user) => dispatch(addUser(user))}
	
}

const listPerson = connect(
	mapStateToProps,
	mapDispatchToProps,
)(App);

export default listPerson;
