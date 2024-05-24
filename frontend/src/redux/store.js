import { createStore, combineReducers, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
import { thunk } from "redux-thunk";
import {
  userLoginReducer,
  userRegisterReducer,
  userUpdateReducer,
} from "./reducers.js/userReducer";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userUpdate: userUpdateReducer,
});

const initialState = {};

// const middleware = { thunk };
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
