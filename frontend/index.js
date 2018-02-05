import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {Component} from 'react';

import App from './containers/App'; 
//class App extends Component{}
let initialState = { users:['ghfh','sdfsdv']};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_ADD':{
      const user = action.user;
      return [...state, user];
      return state;
    }
    case 'USER_REMOVE': {
      return state;
    }
    default:
      return state;
  }
};
let store = createStore(reducer);


ReactDOM.render(
	<Provider store={store}>
		<App />
	</ Provider>,
	document.getElementById('root')
);

