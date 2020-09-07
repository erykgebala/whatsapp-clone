import React from 'react'
import './ChatHeader.css'
import { Avatar, IconButton } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';

export default function ChatHeader() {
    return (
        <div>
            <div className="chat-header">
                <Avatar/>
                <div className="chat-header-info">
                    <h4>Nazwa pokoju</h4>
                    <p>Ostatnio widziany 2020-12-12</p>
                </div>
                <div className="chat-header-actions">
                    <IconButton>
                        <SearchOutlinedIcon/>
                    </IconButton>
                    <IconButton>
                        <AttachFileOutlinedIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>
        </div>
    )
}
