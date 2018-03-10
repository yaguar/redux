import {connect} from 'react-redux';
import React, {Component} from 'react';
import addUser from '../action/adduser';

class App extends Component{
	//const submit = (values)=>{console.log(values);this.props.reset();}
	
	render(){
		const submit = (values)=>{console.log(values);}
	
		console.log(this.props);
		
		return (
			<ul class="list-group">
					{this.props.users.map((user, index) =>
						<li key={index} class="list-group-item">{user.phone}</li>)}
			</ul>
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
		dispatch(addUser(user))
	}
	}
}

const listPerson = connect(
	mapStateToProps,
	mapDispatchToProps
)(App);

export default listPerson;
