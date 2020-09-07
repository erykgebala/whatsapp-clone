import React from 'react'
import './RoomsHeader.css'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Avatar, IconButton } from '@material-ui/core/';

export default function RoomsHeader() {
    return (
        <div className="rooms-header-container">
            <div className="left-container">
                <Avatar/>
            </div>
            <div className="right-container">
                <IconButton>
                    <DonutLargeIcon/>
                </IconButton>
                <IconButton><ChatIcon/></IconButton>
                <IconButton><MoreVertIcon/></IconButton>
            </div>
        </div>
    )
}
