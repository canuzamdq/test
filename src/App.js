import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import './App.css';

// Conponents
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div>Hola</div>
        <Content/>
        <Footer/>
      </div>
    );
  }
}

export default App;
