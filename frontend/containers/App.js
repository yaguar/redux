import {connect} from 'react-redux';
import FormAdd from '../containers/FormAdd.js';
import React, {Component} from 'react';
import addUser from '../action/adduser';

class App extends Component{
	//const submit = (values)=>{console.log(values);this.props.reset();}
	
	render(){
		const submit = (values)=>{console.log(values);}
	
		console.log(this.props);
		
		return (
			<div>
				<button onClick={() => {this.props.onClicker('jhgj')}}>кнопка</button>
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
		users: state.users.users,
	};
	return props;
}

function mapDispatchToProps(dispatch) {
	return {
		onClicker: (user) => {
		alert('df')
		dispatch(addUser(user))
	}
	}
}

const listPerson = connect(
	mapStateToProps,
	mapDispatchToProps
)(App);

export default listPerson;
