import React from 'react';
import Header from './Header';

class About extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className="aboutDisplay">
                    <div>3 columns</div>
                    <div>3 columns</div>
                    <div>3 columns</div>
                </div>
            </div>
        )
    }
}

export default About;