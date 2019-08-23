import React from 'react';
import '../css/App.scss';
import Image from '../css/cabinet-counter-small.jpg'
import Toolbar from './Toolbar/Toolbar';
import SideDrawer from './SideDrawer/SideDrawer';
import Backdrop from './Backdrop/Backdrop'
// import backdrop from './Backdrop/Backdrop';

const styles = {
  imageContainer: {
      height: 800,
      backgroundImage: `url(${Image})`,
      repeat: 'none'
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

  render () {
    let sideDrawer;
    let backdrop;

    if (this.state.sideDrawerOpen) {
      sideDrawer = <SideDrawer />;
      backdrop = <Backdrop />;
    }

    return (
      <div className="App">
        <Toolbar drawerClickHandler={this.drawerToggler}/>
        {sideDrawer}
        {backdrop}
        <div className="main-body-content" style={styles.imageContainer}>
          <div className="content-text">
            <div className="cell column-1">
              <h2>Column 1</h2>
              <p>church-key pork belly Portland direct trade  hoodie polaroid before they sold out photo booth Marfa tousled mixtape deep v Cosby sweater readymade kogi aesthetic axe PBR&B meh farm-to-table selvage post-ironic quinoa</p>
            </div>
            <div className="cell column-2">
              <h2>COLMUN 2</h2>
              <p>Intelligentsia Godard synth kale chips Neutra gluten-free High Life banh mi mixtape whatever tofu vinyl cleanse post-ironic authentic cray Portland retro Austin Williamsburg banjo Echo Park crucifix pour-over readymade</p>
            </div>
            <div className="cell column-3">
              <h2>COLMUN 3</h2>
              <p>tousled beard scenester sartorial Marfa swag McSweeney's hashtag twee Truffaut chambray direct trade  four loko crucifix selfies retro biodiesel umami pug Williamsburg authentic 3 wolf moon iPhone Tonx raw denim quinoa</p>
            </div>
          </div>
            {/* <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a> */}
        </div>
      </div>
    )
  }
}

export default App;
