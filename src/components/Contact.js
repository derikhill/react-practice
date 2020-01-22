import React from 'react';
import Toolbar from './Toolbar/Toolbar';
import SideDrawer from './SideDrawer/SideDrawer';
import Backdrop from './Backdrop/Backdrop';
import Footer from './Footer/Footer';
import axios from 'axios';

const API_PATH = 'http://localhost:3000/react-practice/api/contact.php';

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

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            mailSent: false,
            error: null
        }
    }

    submitEmail(e) {
        e.preventDefault();
        axios({
            method: 'POST',
            url: `${API_PATH}`,
            headers: {
                'content-type': 'application/json'
            },
            data: this.state
        })
        .then(result => {
            this.setState({
                mailSent: result.data.sent
            })
        })
        .catch(error => this.setState({ error: error.message }));
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
                    <form action="#">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            value={this.state.name} 
                            onChange={e => this.setState({ name: e.target.value})}
                        />
                        <label>Email</label>
                        <input 
                            type="email"
                            name="email"
                            value={this.state.email} 
                            onChange={e => this.setState({ email: e.target.value})}
                        />
                        <label>Your Question or Comment</label>
                        <textarea
                            name="message"
                            rows="5"
                            value={this.state.message} 
                            onChange={e => this.setState({ message: e.target.value})}
                        />
                        <button type="submit" onClick={e => this.submitEmail(e)}>Send Message</button>
                        <div>
                            {this.setState.mailSent && 
                                <div>Thanks for your message!</div>
                            }
                        </div>
                    </form>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Contact;