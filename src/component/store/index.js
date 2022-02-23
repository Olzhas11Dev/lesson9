import { createStore, combineReducers } from "redux";
import { cashReducer } from "./cashReducer";
import { usersReducer } from "./userReducer";

const rootReducer = combineReducers({
  cashRed: cashReducer,
  userRed: usersReducer,
});

export const store = createStore(rootReducer);
