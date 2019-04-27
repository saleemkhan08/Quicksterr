import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import CategoryReducer from "./components/Categories/CategoryReducer";
import ProductReducer from "./components/Products/ProductReducer";
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB4pvfZAEQ5kps-znCy0A1okC6mqhYmG2A",
  authDomain: "quicksterr-2020.firebaseapp.com",
  databaseURL: "https://quicksterr-2020.firebaseio.com",
  projectId: "quicksterr-2020",
  storageBucket: "quicksterr-2020.appspot.com",
  messagingSenderId: "87074361070"
};
firebase.initializeApp(firebaseConfig);

export const store = createStore(
  combineReducers({ CategoryReducer, ProductReducer }),
  applyMiddleware(thunk)
);
export const database = firebase.database();
export const storage = firebase.storage();
export const firebaseAuth = firebase.auth();
