import React from 'react';
import Header from './Header';

class Contact extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className="contactForm">
                    <h5>Contact me </h5>
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