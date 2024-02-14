import { MARK_AS_READ, SET_TYPE_FILTER,FETCH_NOTIFICATIONS_SUCCESS} from "./notificationActionTypes";

export function markAsAread(index){
   return {
    type:MARK_AS_READ,
    index:index
   }
}
export function setNotificationFilter(filter){
    return {
       type:SET_TYPE_FILTER,
       payload:{
        filter:filter
       }
    }
}

export function notifications(){
    return {
        type:FETCH_NOTIFICATIONS_SUCCESS,
        data:[]
    }
}