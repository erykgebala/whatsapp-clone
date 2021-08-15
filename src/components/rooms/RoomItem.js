import React, { useState , useEffect} from 'react';
import { Avatar } from '@material-ui/core/';
import './RoomItem.css'

export default function RoomItem({room}) {
    const [seed, setSeed] = useState('');

    useEffect(() => {
      setSeed(Math.floor(Math.random() * 5000));
    }, [])
    return (
        <div className="room">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="room-body">
                <h4>{room.name}</h4>
                <p>{room.desc}</p>
            </div>
        </div>
    )
}
