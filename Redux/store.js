import {legacy_createStore as createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import data from './actions/auth'
const store = createStore(data, applyMiddleware(thunk))

export default store;