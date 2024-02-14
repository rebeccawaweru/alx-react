const initialState = {
    notifications:[],
    filter:'DEFAULT'
};
export function notificationReducer (state = initialState, action){
     switch(action.type) {
        case 'FETCH_NOTIFICATIONS_SUCCESS':
             const updatedNotifications = action.data.map(c => ({
                ...c, isRead:false
             }))
              return {
                ...state, notifications:updatedNotifications
              };
        default:
            return state;
     }
};