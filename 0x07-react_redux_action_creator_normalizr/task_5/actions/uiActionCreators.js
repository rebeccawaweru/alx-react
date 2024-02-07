import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from "./uiActionTypes";
import {useDispatch} from 'redux'
export const login = (email, password) => {
    return {
        action:LOGIN,
        payload: { user : { email, password } }
    };
};

export const loginSuccess = () => {
    return {
        type:LOGIN_SUCCESS
    }
};

export const loginFailure = () => {
    return {
        type: LOGIN_FAILURE
    }
};

export function loginRequest(email, password){
   return async (dispatch) => {
    dispatch(login(email,password));

    try {
         // Making API call to fetch login success
      const response = await fetch('/login-success.json');
      if (!response.ok) {
        throw new Error('Failed to login');
      }

      // Dispatching loginSuccess action if login is successful
      dispatch(loginSuccess());
    } catch (error) {
       dispatch(loginFailure())
    }
   }
};

export const logout = () => { return { action:LOGOUT } };
export const displayNotificationDrawer = () => { return { action: DISPLAY_NOTIFICATION_DRAWER } };
export const hideNotificationDrawer = () => { return { action: HIDE_NOTIFICATION_DRAWER } };