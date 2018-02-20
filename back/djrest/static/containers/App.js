
import FormAdd from './FormAdd.js';
import React, {Component} from 'react';
import addUser from '../action/adduser';
import ContactList from './ContactList';

class App extends Component{	
	render(){
		return (
			<div>
	
				<FormAdd />
			  <ContactList />
			</div>
		);
	}
}

export default App;
