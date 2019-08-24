import React from 'react';
import './SideDrawer.scss';

const Hamburger = props => (
    <button className="hamburger-button" onClick={props.click}>
        <div className="hamburger-patty"></div>
        <div className="hamburger-patty"></div>
        <div className="hamburger-patty"></div>
    </button>
)

export default Hamburger;