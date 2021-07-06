import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Image from '../../atoms/image/image';
import './style.css';


export default function Logocontainer() {
    return (
        <div className="icons-container">
            <div className="hamburger-logo">
            <FontAwesomeIcon icon={faBars} />
            </div>
            <div className="disc-logo">
                 <Image location="discovery-logo.png" alt="logo" className="my-logo"/>
            </div>
        </div>
    )
}
