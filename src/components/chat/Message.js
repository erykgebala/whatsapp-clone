import React from 'react'
import './Message.css'

export default function Message(props) {
    return (
        <>
        <div className={props.message.owner == props.user ? 'message reciver' : 'message'}>
        <span className="msg-owner">{props.message.owner}</span>
            <p className="msg-content">{props.message.content} <span className="msg-time">{props.message.timestamp}</span></p>
        </div>
         </>
    )
}
