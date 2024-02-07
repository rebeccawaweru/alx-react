import { uiReducer } from "./uiReducer";
import {selectCourse} from '../actions/courseActionCreators'
import {displayNotificationDrawer} from '../actions/uiActionCreators'
describe('/testing', () => {
    const initialState = {
        isNotificationDrawerVisible:false,
        isUserLoggedIn:false,
        user:{}
    };
    const result = {
       ...initialState,isNotificationDrawerVisible:true,
     };
    it('/return intialState', () => {
        expect(uiReducer(initialState, {})).toEqual(initialState)
    });
    it('/return intialState with SELECT_COURSE type', () => {
        expect(uiReducer(initialState, selectCourse())).toEqual(initialState)
    });
    it('/return w/ DISPLAY_NOTIFICATION_DRAWER type', () => {
        expect(uiReducer(initialState, displayNotificationDrawer())).toEqual(result)
    });

});