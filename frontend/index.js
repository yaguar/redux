import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import {Component} from 'react';
<<<<<<< HEAD
import {reducer as formReducer} from 'redux-form';
=======
import {reducer as formReducer} form 'redux-form';
>>>>>>> 189b1682e4198245c58496902c06585f40a08457

import App from './containers/App'; 
//class App extends Component{}
let initialState = { users:['ghfh','sdfsdv']ш};
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
<<<<<<< HEAD
	reducer,
	form: formReducer
});
=======
  reducer,
  form: formReducer,	
});

>>>>>>> 189b1682e4198245c58496902c06585f40a08457
let store = createStore(rootReducer);


ReactDOM.render(
	<Provider store={store}>
		<App />
	</ Provider>,
	document.getElementById('root')
);

