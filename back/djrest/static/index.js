import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, combineReducers, getState} from 'redux';
import {applyMiddleware, compose} from 'redux';
import logger from 'redux-logger';
import {Component} from 'react';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
import addUser from './action/adduser';
import App from './containers/App'; 
import {method_get, method_post} from './function/functions';
//class App extends Component{}
let initialState = { users:[{first_name:'Иван', last_name:'Биденко', phone:'123456'}, {first_name:'Макс', last_name:'Мартынов', phone:'234567'}]};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_ADD':{
      return {users: [...state.users, action.users]}
    };
    case 'USER_REMOVE': {
      return state;
    };
    case 'USERS_UPDATE': {
      console.log(action);
      return state;
    }
    default:
      return state;
  };
};

const rootReducer = combineReducers({
	users: reducer,
	form: formReducer
});
 
export let store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    applyMiddleware(logger)
  ), 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
//method_get();
//store.dispatch({type: 'USER_ADD', users:'my'});
//fetch('/listcontact', {method:'post',headers: {
    //'Accept': 'application/json, text/plain, */*',
/*   'Content-Type': 'application/json'
  }, body:JSON.stringify({
        first_name: 'Акмарал',
        last_name: 'Ашимова',
        phone: 17264725
    })})  
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
        data.map((user, index) =>
						store.dispatch(addUser(user)))
        //store.dispatch(addUser(data));  
      });  
    }  
  )  
  .catch(function(err) {  
    console.log('Fetch Error :-S', err);  
  });
*/

//console.log(store.getState());
ReactDOM.render(
	<Provider store={store}>
		<App />	
	</ Provider>,
	document.getElementById('root')
);

