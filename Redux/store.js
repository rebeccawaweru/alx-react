//Traditional/Legacy Setup
// import {legacy_createStore as createStore, applyMiddleware} from "redux";
// import thunk from 'redux-thunk';
// import data from './actions/auth'
// const store = createStore(data, applyMiddleware(thunk))


// export default store;

//Modern Setup/ReduxToolkit
import { configureStore } from "@reduxjs/toolkit"
import loginReducer from './reducers/auth'

const store = configureStore({
    reducer:{
        login: loginReducer
    }
});

export default store;