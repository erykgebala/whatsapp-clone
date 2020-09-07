import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/rooms/Sidebar';
import Chat from './components/chat/Chat';

function App() {
  return (
    <div className="app">
      <div className="main-container">
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  );
}

export default App;
