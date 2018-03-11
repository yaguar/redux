let initialState = { users:[]};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_ADD':{
      return {users: [...state.users, action.users]}
    };
    case 'USER_REMOVE': {
      return state;
    };
    case 'USERS_UPDATE': {
      return state;
    }
    default:
      return state;
  };
};

export default reducer;
