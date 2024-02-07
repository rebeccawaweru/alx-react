//create types
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGIN_REQUEST = "LOGIN_REQUEST";

//create action
export const loginRequest = () => {
    return {
        type:LOGIN_REQUEST
    }
}
export const loginSuccess = (email, password) => {
    return {
        type:LOGIN_SUCCESS,
        payload:{ user: email, password }
    }
}
export const loginError = (error) => {
    return {
        type:LOGIN_ERROR,
        payload:error
    }
}
