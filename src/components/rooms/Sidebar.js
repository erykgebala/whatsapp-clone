import React from 'react'
import './Sidebar.css';
import SearchBar from './SearchBar';
import RoomsList from './RoomsList';
import RoomsHeader from './RoomsHeader';

function Sidebar() {
    return (
        <div className="rooms-container">
            <div className="rooms-header">
                <RoomsHeader/>
            </div>
            <div className="rooms-body">
                <SearchBar/>
                <RoomsList/>
            </div>
        </div>
    )
}

export default Sidebar
