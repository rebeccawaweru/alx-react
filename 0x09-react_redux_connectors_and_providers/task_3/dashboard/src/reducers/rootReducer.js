import { combineReducers } from "redux";
import { uiReducer } from "./uiReducer";
import { courseReducer } from './courseReducer'
import { notificationReducer } from "./notificationReducer";

//Combine all reducers into single root reducer
const rootReducer = combineReducers({
    ui:uiReducer,
    course:courseReducer,
    notification:notificationReducer
});

export default rootReducer