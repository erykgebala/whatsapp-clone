import React, { useState, useEffect, useRef} from 'react'
import './Chat.css'
import Message from './Message'
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import MicIcon from '@material-ui/icons/Mic';
import ChatHeader from './ChatHeader';
import axios from '../../axiosConfig';

function Chat({messages, user}) {
    const [msg, setMsg] = useState('');

    const messagesEndRef = useRef();

    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(scrollToBottom, [messages]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/v1/messages', {
            "owner": user,
            "content": msg,
            "timestamp": new Date().toUTCString()
        });
        setMsg('')
    }
    
    return (
        <div className="chat-container">
            <ChatHeader/>
            <div className="chat-body">
                {messages.map((message)=> {
                    return <Message key={message._id} message={message} user={user}/>;
                })}
                <div className="scrollToElement" ref={messagesEndRef}></div>
            </div>
            <div className="chat-footer">
                <SentimentSatisfiedIcon/>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={msg}  onChange={(e) => setMsg(e.target.value)} placeholder="Wpisz wiadomosc"/>
                    <button type="submit">Wyslij</button>
                </form>
                <MicIcon/>
            </div>
        </div>
    )
}

export default Chat
