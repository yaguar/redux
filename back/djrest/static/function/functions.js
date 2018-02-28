import addUser from '../action/adduser';
import {createStore, combineReducers, getState} from 'redux';
import {store} from '../index';
export function method_get(){ 
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
          data.map((user, index) =>
						store.dispatch(addUser(user)))
        //store.dispatch(addUser(data));  
        });  
      }  
    )  
    .catch(function(err) {  
      console.log('Fetch Error :-S', err) 
    })
}

export function method_post(){
  fetch('/listcontact', {method:'post',headers: {
     'Accept': 'application/json, text/plain, */*',
     'Content-Type': 'application/json'
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
}

