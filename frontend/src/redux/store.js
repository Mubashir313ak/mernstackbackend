import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { thunk } from "redux-thunk";
import {
  userLoginReducer,
  userRegisterReducer,
  userUpdateReducer,
} from "./reducers.js/userReducer";
import {
  noteCreateReducer,
  noteDeleteReducer,
  noteListReducer,
  noteUpdateReducer,
} from "./reducers.js/notesReducers";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userUpdate: userUpdateReducer,
  notesList: noteListReducer,
  noteCreate: noteCreateReducer,
  noteDelete: noteDeleteReducer,
  noteUpdate: noteUpdateReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
