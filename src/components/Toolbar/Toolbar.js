import React from 'react';
import { Link } from 'react-router-dom';
import logo from './elevation.webp';
import './Toolbar.scss';
import Hamburger from '../SideDrawer/Hamburger'

const Toolbar = props => (
    <nav className="toolbar-nav">
        <Hamburger />
        <div>
            <Link to="/"><h3><img src={logo} className="App-logo" alt="logo" /> </h3></Link>
        </div>
        <div className="spacer" />
        <div>
            <ul>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
            </ul>
        </div>
    </nav>
)

export default Toolbar;