import React from 'react';
import Input from '../../atoms/input/input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch} from '@fortawesome/free-solid-svg-icons'
import "./style.css";

export default function Searchbar() {
    return (
        <div className="search-container">
            <Input className="search-input" placeHolder="Search for a show, episode, shorts etc" />
            <div className="search-icon">
            <FontAwesomeIcon icon={faSearch} />
            </div>
        </div>
    )
}
