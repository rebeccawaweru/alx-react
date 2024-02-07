import React from 'react';
import Proptypes from 'prop-types'
import './Notifications.css'
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
class Notifications extends React.Component{
   constructor(props) {
    super(props)
    this.markAsRead = this.markAsRead.bind(this)
   }
   markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
   }

   render() {
    const data = getLatestNotification()
    return (
        <React.Fragment>
                  {!this.props.displayDrawer ? 
             <div onClick={this.props.handleDisplayDrawer}>
             <p>Here is the list of notifications</p>
             </div>
                :
                <div className='Notifications'>
             <button aria-label='Close' style={{right:4, position:'absolute', top:6, background:'transparent', border:'none'}}
              onClick={()=> {
              console.log('Close button has been clicked');
              this.props.handleHideDrawer()
              }}>
              <img src='' alt='close-icon' style={{height:'10px', width:'10px'}}/>
             </button>
                  <ul>
                  <NotificationItem type="default" value="New course available"/>
                  <NotificationItem type="urgent" value="New resume available"/>
                  <NotificationItem html={{__html: data}}/>
                </ul>
                </div>
             }
        </React.Fragment>
    )
   }
}

Notifications.propTypes = {
  displayDrawer: Proptypes.bool,
  handleDisplayDrawer: Proptypes.func,
  handleHideDrawer: Proptypes.func,
}
Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications:[],
  handleDisplayDrawer:()=>{},
  handleHideDrawer:()=>{}
}
export default Notifications;