import {loginSuccess, loginRequest, loginError} from './actions/auth'
export const login = (email, password) => {
    return (dispatch) => {
        dispatch(loginRequest());
        axios.post('/login', {email, passowrd})
        .then(() => {
            dispatch(loginSuccess(email,password));
        })
        .catch(error => {
            dispatch(loginError(error))
        })
    }
}