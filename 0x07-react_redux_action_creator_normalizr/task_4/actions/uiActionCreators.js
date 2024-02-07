import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from "./uiActionTypes";

export const login = (email, password) => {
    return {
        action:LOGIN,
        payload: { user : { email, password } }
    };
};
export const logout = () => { return { action:LOGOUT } };
export const displayNotificationDrawer = () => { return { action: DISPLAY_NOTIFICATION_DRAWER } };
export const hideNotificationDrawer = () => { return { action: HIDE_NOTIFICATION_DRAWER } };