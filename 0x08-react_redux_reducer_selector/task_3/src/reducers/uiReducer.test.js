import { uiReducer } from "./uiReducer";
import {selectCourse} from '../actions/courseActionCreators'
import {displayNotificationDrawer} from '../actions/uiActionCreators'
import { Map } from "immutable"
describe('/testing', () => {
    const initialState = Map({
        isNotificationDrawerVisible:false,
        isUserLoggedIn:false,
        user:{}
    });
    const result = initialState.set('isNotificationDrawerVisible', true);
    it('/return intialState', () => {
        expect(uiReducer(undefined, {})).toEqualImmutable(initialState)
    });
    it('/return intialState with SELECT_COURSE type', () => {
        expect(uiReducer(initialState, selectCourse())).toEqualImmutable(initialState)
    });
    it('/return w/ DISPLAY_NOTIFICATION_DRAWER type', () => {
        expect(uiReducer(initialState, displayNotificationDrawer())).toEqualImmutable(result)
    });

});