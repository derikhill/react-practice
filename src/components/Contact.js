import React from 'react';
import Toolbar from './Toolbar/Toolbar';

class Contact extends React.Component {
    render() {
        return (
            <div>
                <Toolbar />
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