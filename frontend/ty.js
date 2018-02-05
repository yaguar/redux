import {createStore} from 'redux';

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'USER_ADD':{
      const user = action.user;
      return [...state, user];
    }
    case 'USER_REMOVE': {
      return state;
    }
    default:
      return state;
  }
};
const store = createStore(reducer);
store.subscribe(() =>
  console.log(store.getState()),
);
const user = 'dfgdfb';
const addUser = {type: 'USER_ADD', user: {user}}
store.dispatch(addUser);

const adUser = {type: 'USER_ADD', user: {user}}
store.dispatch(adUser);
