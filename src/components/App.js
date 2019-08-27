import React from 'react';
import '../css/App.scss';
import Image from '../css/cabinet-counter-small.jpg'
import Toolbar from './Toolbar/Toolbar';
import SideDrawer from './SideDrawer/SideDrawer';
import Backdrop from './Backdrop/Backdrop'
// import backdrop from './Backdrop/Backdrop';

const styles = {
  imageContainer: {
      height: 'auto',
      width: '100%',
      backgroundImage: `url(${Image})`,
      backgroundRepeat: 'no-repeat'
  }
}

class App extends React.Component {
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

  render () {
    let backdrop;
  
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropToggler} />;
  }

    return (
      <div className="App">
        <Toolbar drawerOpener={this.drawerToggler}/>
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <div className="main-body-content" style={styles.imageContainer}>
          <div className="content-text">
            <div className="cell column-1">
              <h3>Elevation Construction is based in Northwest Arkansas working in Bentonville, Rogers, Fayetteville and surrounding areas. We have been in construction for over 30 years.</h3>
            </div>
            <div className="cell column-2">
              <h3>If you are looking for new home construction, remodeling, deck building or cabinetry we can handle it all. Contact us to see how we can help with your ideas.</h3>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
