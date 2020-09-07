import React from 'react'
import { Avatar } from '@material-ui/core/';
import './RoomItem.css'

export default function RoomItem() {
    return (
        <div className="room">
            <Avatar/>
            <div className="room-body">
                <h4>Nazwa pokoju</h4>
                <p>Opis pokojusad fdsaf sadf sad fsa fsafd sa</p>
            </div>
        </div>
    )
}
