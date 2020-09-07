import React from 'react'
import './RoomsList.css'

import RoomItem from './RoomItem'

export default function RoomsList() {
    return (
        <div className="rooms-list-container">
            <div className="rooms-list-body">
                <h3>Dodaj nowy pokoj</h3>
                <RoomItem/>
                <RoomItem/>
                <RoomItem/>
           </div>
        </div>
    )
}
