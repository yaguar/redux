import {connect} from 'react-redux';
import React, {Component} from 'react';
import addUser from '../action/adduser';
import Person from '../components/Person';

const App = ({users}) => 	(
  <ul class="list-group">
	  {users.map((user, index) => <Person key={index} user={user}/>)}
	</ul>
);


const mapStateToProps = (state) => {
	let props = {
		users: state.users.users,
	};
	return props;
}

const listPerson = connect(
	mapStateToProps,
)(App);

export default listPerson;
