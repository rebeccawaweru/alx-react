import { loginSuccess, loginError } from "../actions/auth";
import { LOGIN_SUCCESS, LOGIN_ERROR } from "../actions/auth";
import {combineReducers} from 'redux';
const initialState = {
    email:"",
    password:"",
    success:false,
    error:null
};

export const loginReducer = (state=initialState, action) => {
    switch(action.type) {
        case LOGIN_SUCCESS:
            const { user } = action.payload;
            return {
                ...state, 
                email: user.email,
                password: user.password,
                success:true,
            }
        case LOGIN_ERROR:
            return {
                ...state, error:action.payload
            }
        default: {
            return state
        }
    }
}

export default combineReducers({
    data:loginReducer
})