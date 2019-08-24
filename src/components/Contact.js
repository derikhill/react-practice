import React from 'react';
import Toolbar from './Toolbar/Toolbar';
import SideDrawer from './SideDrawer/SideDrawer';
import Backdrop from './Backdrop/Backdrop'

class Contact extends React.Component {
    state = {
        sideDrawerOpen: false
    };

    drawerToggler = () => {
        this.setState((prevState) => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen}
        })
    };

    backdropToggler = () => {
        this.setState({sideDrawerOpen: false})
    };

    render() {
        let backdrop;

        if (this.state.sideDrawerOpen) {
            backdrop = <Backdrop click={this.backdropToggler} />;
        }
        return (
            <div>
                <Toolbar drawerOpener={this.drawerToggler}/>
                <SideDrawer show={this.state.sideDrawerOpen} />
                {backdrop}
                <div className="contactForm">
                    <h3>Contact me </h3>
                    <form>
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            value="" />
                        <label>Email</label>
                        <input 
                            type="email"
                            name="email"
                            value="" />

                    </form>
                    <p>Fill out the form that is not made yet.</p>
                </div>
            </div>
        )
    }
}

export default Contact;