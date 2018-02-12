import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, combineReducers, getState} from 'redux';
import {Component} from 'react';
import {reducer as formReducer} from 'redux-form';
import addUser from './action/adduser';
import App from './containers/App'; 
//class App extends Component{}
let initialState = { users:['ghfh','sdfsdv']};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_ADD':{
      console.log('sd')
      return {users: [...state.users, ...action.users]}
    };
    case 'USER_REMOVE': {
      return state;
    };
    default:
      return state;
  };
};

const rootReducer = combineReducers({
	users: reducer,
	form: formReducer
});
 
let store = createStore(rootReducer, /* preloadedState, */
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//store.dispatch({type: 'USER_ADD', users:'my'});
store.dispatch(addUser('my1'));
console.log(store.getState());
ReactDOM.render(
	<Provider store={store}>
		<App />	
	</ Provider>,
	document.getElementById('root')
);

