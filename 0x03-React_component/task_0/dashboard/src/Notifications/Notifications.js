import React from 'react';
import './Notifications.css'
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
export default function Notifications(){
    const data = getLatestNotification()
    return (
        <div className="Notifications">
             <div>
             <p>Here is the list of notifications</p>
              <ul>
                <NotificationItem type="default" value="New course available"/>
                <NotificationItem type="urgent" value="New resume available"/>
                <NotificationItem html={{__html: data}}/>
              </ul>
             </div>
             <button aria-label='Close' style={{right:4, position:'absolute', top:6, background:'transparent', border:'none'}} onClick={()=>console.log('Close button has been clicked')}>
              <img src='' alt='close-icon' style={{height:'10px', width:'10px'}}/>
             </button>
        </div>
    )
}