import React, { Component } from 'react';

class App extends Component {
  state = {
    todos: []
  };

  async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/listcontact/');
      const todos = await res.json();
      this.setState({
        todos
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        {this.state.todos.map(item => (
          <div>
            <h1>{item.first_name}</h1>
            <h1>{item.last_name}</h1>
	    <h1>{item.phone}</h1>
            
          </div>
        ))}
      </div>
    );
  }
}

export default App;
