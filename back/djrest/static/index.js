import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, combineReducers, getState} from 'redux';
import {Component} from 'react';
import {reducer as formReducer} from 'redux-form';
import addUser from './action/adduser';
import App from './containers/App'; 
//class App extends Component{}
let initialState = { users:[{first_name:'Иван', last_name:'Биденко', phone:'123456'}, {first_name:'Макс', last_name:'Мартынов', phone:'234567'}]};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_ADD':{
			console.log(action.users)
      return {users: [...state.users, action.users]}
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
fetch('/listcontact')  
  .then(  
    function(response) {  
      if (response.status !== 200) {  
        console.log('Looks like there was a problem. Status Code: ' +  
          response.status);  
        return;  
      }

      // Examine the text in the response  
      response.json().then(function(data) {  
        console.log(data);  
      });  
    }  
  )  
  .catch(function(err) {  
    console.log('Fetch Error :-S', err);  
  });
//store.dispatch({type: 'USER_ADD', users:'my'});

//console.log(store.getState());
ReactDOM.render(
	<Provider store={store}>
		<App />	
	</ Provider>,
	document.getElementById('root')
);

