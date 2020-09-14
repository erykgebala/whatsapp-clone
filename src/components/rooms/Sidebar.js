import React from 'react'
import './Sidebar.css';
import SearchBar from './SearchBar';
import RoomsList from './RoomsList';
import RoomsHeader from './RoomsHeader';

function Sidebar(props) {
    return (
        <div className="rooms-container">
            <div className="rooms-header">
                <RoomsHeader user={props.user}/>
            </div>
            <div className="rooms-body">
                <SearchBar/>
                <RoomsList/>
            </div>
        </div>
    )
}

export default Sidebar
