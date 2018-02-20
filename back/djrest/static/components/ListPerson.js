import {Component} from 'react';

class ListPerson extends Component{
	render(){
		return (
			<div>
				<ul>
					{this.props.user.map((user, index) =>
						<li key={index}>{user.firstname}</li>)}
				</ul>
			</div>
		);
	}
}
