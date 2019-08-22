import React from 'react';
import { Link } from 'react-router-dom';
import './SideDrawer.scss';

const SideDrawer = props => {
    return (
        <nav className="sidedrawer-nav">
            <div>
                <ul>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default SideDrawer;