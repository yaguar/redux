

const reducer = (state = initialState, action) => {
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

