import React from 'react';
import './Notifications.css'
import { getLatestNotification } from '../utils/utils';

export function Notifications(){
    const data = getLatestNotification()
    return (
        <div className="Notifications">
             <div>
             <p>Here is the list of notifications</p>
              <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li dangerouslySetInnerHTML={{__html: data}}></li>
              </ul>
             </div>
             <button aria-label='Close' style={{right:4, position:'absolute', top:6, background:'transparent', border:'none'}} onClick={()=>console.log('Close button has been clicked')}>
              <img src='' alt='close-icon' style={{height:'10px', width:'10px'}}/>
             </button>
        </div>
    )
}