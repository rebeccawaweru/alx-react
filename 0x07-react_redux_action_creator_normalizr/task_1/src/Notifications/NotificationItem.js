import React from 'react'
export default function NotificationItem(props){
    const {type, value, html} = props
    return <li data-notification-type={type} dangerouslySetInnerHTML={html}>{value}</li>
}