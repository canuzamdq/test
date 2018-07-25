import React, { Component } from 'react';
import logo from '../logo.svg';

class Header extends Component {
    render() {
      return (
        <div>
          <header>
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo"/>
              <h1>Welcome to React</h1>
            </div>
          </header>
        </div>
      );
    }
  }
  
  export default Header;