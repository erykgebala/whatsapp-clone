import React, { useState } from 'react'
import './Chat.css'
import Message from './Message'
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import MicIcon from '@material-ui/icons/Mic';
import ChatHeader from './ChatHeader';

function Chat() {
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage('')
    }
    
    return (
        <div className="chat-container">
            <ChatHeader/>
            <div className="chat-body">
                <Message/>
                <Message/>
                <Message/>
                <Message/>
                <Message/>
                <Message/>
            </div>
            <div className="chat-footer">
                <SentimentSatisfiedIcon/>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={message}  onChange={(e) => setMessage(e.target.value)} placeholder="Wpisz wiadomosc"/>
                    <button type="submit">Wyslij</button>
                </form>
                <MicIcon/>
            </div>
        </div>
    )
}

export default Chat
