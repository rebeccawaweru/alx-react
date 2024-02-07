import { loginSuccess, loginError } from "../actions/auth";
// import { LOGIN_SUCCESS, LOGIN_ERROR } from "../actions/auth";
// import {combineReducers} from 'redux';
// const initialState = {
//     email:"",
//     password:"",
//     success:false,
//     error:null
// };

// export const loginReducer = (state=initialState, action) => {
//     switch(action.type) {
//         case LOGIN_SUCCESS:
//             const { user } = action.payload;
//             return {
//                 ...state, 
//                 email: user.email,
//                 password: user.password,
//                 success:true,
//             }
//         case LOGIN_ERROR:
//             return {
//                 ...state, error:action.payload
//             }
//         default: {
//             return state
//         }
//     }
// }

// export default combineReducers({
//     data:loginReducer
// })

//Modern setup/ReduxToolkit
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    email:"",
    password:"",
    success:false,
    error:null
};
const loginSlice = createSlice({
    name:"login",
    initialState,
    reducers:{
        loginSuccess(state,action){
            const {email, password} = action.payload;
            state.email = email;
            state.password = password;
            state.success = true;
        },
        loginError(state, action){
            state.error = action.payload
        }
    }
});

export const { loginSuccess, loginError} = loginSlice.actions;
export default loginSlice.reducer