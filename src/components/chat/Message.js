import React from 'react'
import './Message.css'

export default function Message() {
    return (
        <>
        <div className="message" >
            <span className="msg-owner">Jan Kowalski</span>
            <p className="msg-content">Tresc wiadomosci <span className="msg-time">Czwartek 12.12.2020</span></p>
        </div>
        <div className="message reciver">
             <span className="msg-owner">Jan Kowalski</span>
             <p className="msg-content">Tresc wiadomosci <span className="msg-time">Czwartek 12.12.2020</span></p>
         </div>
         </>
    )
}
