import React, { useState , useEffect} from 'react';
import './RoomsList.css'
import axios from '../../axiosConfig';
import RoomItem from './RoomItem'

export default function RoomsList() {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        axios.get('/v1/rooms').then((response) => {
            setRooms(response.data);
        })
      }, []);

    return (
        <div className="rooms-list-container">
            <div className="rooms-list-body">
                <h3>Dodaj nowy pokoj</h3>
                {rooms.map(room => {return <RoomItem room={room}/>})}        
           </div>
        </div>
    )
}
