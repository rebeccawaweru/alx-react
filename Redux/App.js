import React from 'react'
import ReactDOM from 'react-dom'
import store from './store';
import { Provider } from 'react-redux';
import MyComponent from './MyComponent';

ReactDOM.render(
    <Provider store={store}>
         <MyComponent/>
    </Provider>,
    document.getElementById("root")
);
// import {loginSuccess, loginRequest, loginError} from './actions/auth'
// export const login = (email, password) => {
//     return (dispatch) => {
//         dispatch(loginRequest());
//         axios.post('/login', {email, passowrd})
//         .then(() => {
//             dispatch(loginSuccess(email,password));
//         })
//         .catch(error => {
//             dispatch(loginError(error))
//         })
//     }
// }