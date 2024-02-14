import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from "./uiActionCreators";
import { LOGIN, LOGOUT,DISPLAY_NOTIFICATION_DRAWER,HIDE_NOTIFICATION_DRAWER} from "./uiActionTypes";
describe('/testing action creators', () => {
    it('/testing login', () => {
        const email = "wawerur95@gmail.com";
        const password = "test123!";
        const args = {
            action:LOGIN,
            payload: { user : { email, password } }
        }
        expect(login(email,password)).toEqual(args);
    });

    it('/testing logout', () => {
        const args = {
            action: LOGOUT
        }
        expect(logout()).toEqual(args)
    });

    it('/testing logout', () => {
        const args = {
            action: LOGOUT
        }
        expect(logout()).toEqual(args)
    });

    it('/testing displayNotificationDrawer', () => {
        const args = {
            action: DISPLAY_NOTIFICATION_DRAWER
        }
        expect(displayNotificationDrawer()).toEqual(args)
    });

    it('/testing hideNotificationDrawer', () => {
        const args = {
            action: HIDE_NOTIFICATION_DRAWER
        }
        expect(hideNotificationDrawer()).toEqual(args)
    });
})