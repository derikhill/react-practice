import React from 'react';
import Header from './Header';
import logo from '../css/logo.svg';
import '../css/App.scss';

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <Header className="App-header"></Header>
        <img src={logo} className="App-logo" alt="logo" /> 
        <div className="App">
          <header className="App-header">
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
      </div>
      </div>
    )
  }
}

export default App;
