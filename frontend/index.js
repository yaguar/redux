import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import {Component} from 'react';
import {reducer as formReducer} from 'redux-form';

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

const rootReducer = combineReducers({
	reducer,
	form: formReducer
});
let store = createStore(rootReducer);


ReactDOM.render(
	<Provider store={store}>
		<App />
	</ Provider>,
	document.getElementById('root')
);

