import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <nav>
                <div>
                    <h3><Link to="/">React Practice</Link></h3>
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