import React, { useState , useEffect} from 'react';
import './App.css';
import Sidebar from './components/rooms/Sidebar';
import Chat from './components/chat/Chat';
import pusher from './pusherConfig';
import axios from './axiosConfig';

function App() {
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState();
  
  useEffect(() => {
    const user = prompt("podaj imie");
    setUser(user)
  }, []);

  useEffect(() => {
    
    axios.get('/v1/messages').then((response) => {
      setMessages(response.data);
    })
  }, []);

  useEffect(() => {
    const channel = pusher.subscribe('messages');
    channel.bind('insert', function(data) {
      setMessages([...messages, data])
    });
    return () => {
      channel.unbind('insert')
    }
  }, [messages]);

  return (
    <div className="app">
      <div className="main-container">
        <Sidebar user={user}/>
        <Chat messages={messages} user={user}/>
      </div>
    </div>
  );
}

export default App;
