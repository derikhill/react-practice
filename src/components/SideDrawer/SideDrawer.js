import React from 'react';
import { Link } from 'react-router-dom';
import './SideDrawer.scss';

const SideDrawer = props => {
    let drawerClasses = 'sidedrawer-nav';
    if (props.show) {
        drawerClasses = 'sidedrawer-nav open';
    }
    return (
        <nav className={drawerClasses} >
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default SideDrawer;