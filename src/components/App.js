import React from 'react';
import '../css/App.scss';
import Image from '../css/cabinet-counter-small.jpg';
import { Link } from 'react-router-dom';
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
          <div className="hero-image">
            <h2>
              Let Elevation Construction take your next project to a higher level
            </h2>
          </div>
        </div>
        <div className="red-back">
          <div className="what-we-do">
            <div className="cell column-1">
              <h2>Elevation Construction is based in Northwest Arkansas working in Bentonville, Rogers, Fayetteville and surrounding areas. We have been in construction for over 30 years.</h2>
            </div>
            <div className="cell column-2">
              <h2>If you are looking for new home construction, remodeling, deck building or cabinetry we can handle it all. Contact us to see how we can help with your ideas.</h2>
            </div>
          </div>
          <button className="checkUsOut"><Link to="/Contact">See What We Can Do For You</Link></button>
        </div>
      </div>
    )
  }
}

export default App;
