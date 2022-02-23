const initialState = {
  users: [],
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USERS": {
      return { ...state, users: action.payload };
    }
    case "ADD_USER": {
      return { ...state, users: [...state.users, action.payload] };
    }
    case "REMOVE_USER": {
      return { ...state, users: action.payload };
    }
    default:
      return state;
  }
};
