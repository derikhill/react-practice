import React from 'react';
import { Link } from 'react-router-dom';
import logo from './elevation.webp';
import './Toolbar.scss';
import Hamburger from '../SideDrawer/Hamburger'

const Toolbar = props => (
    <nav className="toolbar-nav">
        <Hamburger click={props.drawerOpener} />
        <div>
            <Link to="/"><p><img src={logo} className="App-logo" alt="logo" /></p></Link>
        </div>
        <div className="spacer" />
        <div>
            <ul className="toolbar-nav-items">
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
            </ul>
        </div>
    </nav>
)

export default Toolbar;