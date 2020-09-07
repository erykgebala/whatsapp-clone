import React from 'react'
import './SearchBar.css'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

export default function SearchBar() {
    return (
        <div className="searchbar-container">
            <div className="searchbar-body">
                <SearchOutlinedIcon/>
                <input type="text" placeholder="Wyszukaj pokoj" />
            </div>
        </div>
    )
}
