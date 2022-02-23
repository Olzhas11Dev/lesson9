const initialState = {
  cash: 0,
};
export const cashReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CASH": {
      return { ...state, cash: state.cash + action.payload };
    }
    case "REMOVE_CASH": {
      return { ...state, cash: state.cash - action.payload };
    }
    case "RANDOM_CASH": {
      return { ...state, cash: state.cash + action.payload };
    }
    default:
      return state;
  }
};
