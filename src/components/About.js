import React from 'react';
import Toolbar from './Toolbar/Toolbar';
import SideDrawer from './SideDrawer/SideDrawer';
import Backdrop from './Backdrop/Backdrop';
import Footer from './Footer/Footer';

class About extends React.Component {
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
                <div className="aboutDisplay">
                    <div>
                        <h3>
                            Elevation Construction can handle all aspects of home building. If you're looking to remodel or add an addition to your current home we can do it. 
                        </h3>
                    </div>
                    <div>
                        <h3>
                            We have experience with building new cabinetry, deck building, and complete new home construction. Size of the job doesn't matter, we are happy to help you accomplish the task.
                        </h3>
                    </div>
                    <div>
                        <h3>Our owner</h3>
                        <p>
                            My name is Paul. I begin training under my father-in-law in 1984. Eventually I became lead builder/installer and trim man for Collins Custom Cabinets. I have been a partner and quality control manager at Becker-Hill Construction, a residential framing company. In 2010 I started Elevation Construction and Carpentry and have had projects ranging from ground up to simple kitchen/Bath remodels, trim work, tile, etc. At Elevation Construction we strive to "Take your project to a Higher level" whatever the size.
                        </p>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default About;