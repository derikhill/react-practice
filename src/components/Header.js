import React from 'react';
import logo from '../css/elevation.webp';
import { Link } from 'react-router-dom';

class Header extends React.Component {

    render() {
        return (
            <nav>
                <div>
                    <Link to="/"><h3><img src={logo} className="App-logo" alt="logo" /> </h3></Link>
                </div>
                <div>
                    <ul>
                        <li><Link to="/About">About</Link></li>
                        <li><Link to="/Contact">Contact</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Header;