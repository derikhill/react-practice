import React from 'react';
import Toolbar from './Toolbar/Toolbar';
import SideDrawer from './SideDrawer/SideDrawer';
import Backdrop from './Backdrop/Backdrop'

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
                    <p>
                        I begin working for my father-in-law in 1984, who was a builder/master cabinetmaker. training under him for 15 yrs. became lead builder /installer and trim man for Collins Custom Cabinets 1998 I left to be production manager for NWA custom cabinets, became partner and quality control mgr. Becker Hill const. a residential framing company. started Southwind log home const. specializing in log homes in northwest Arkansas, worked in the stainless steel metal fabrication field as assistant manager/ traffic manager, left to start Elevation Construction and Carpentry in 2010, projects ranging from ground up to simple kitchen/Bath remodels, trim work, tile, etc.at Elevation Const. we strive to " Take your project to a Higher level " whatever the size.
                    </p>
                </div>
            </div>
        )
    }
}

export default About;