import React from 'react'
import './RoomsHeader.css'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Avatar, IconButton } from '@material-ui/core/';

export default function RoomsHeader(props) {
    return (
        <div className="rooms-header-container">
            <div className="rooms-header-left-container">
                <Avatar/> {props.user}
            </div>
            <div className="rooms-header-right-container">
                <IconButton>
                <DonutLargeIcon/>
                </IconButton>
                <IconButton><ChatIcon/></IconButton>
                <IconButton><MoreVertIcon/></IconButton>
            </div>
        </div>
    )
}
