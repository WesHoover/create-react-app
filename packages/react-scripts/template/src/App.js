import React, { Component } from 'react';
import * as moment from 'moment';
import * as d3 from 'd3';
import reactLogo from './images/react.svg';
import logo from './images/logo.svg';
import './app.css';
import GridDemo from './components/GridDemo/GridDemo';

import Footer from './components/footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Footer />
      </div>
    );
  }
}

export default App;


        // <img src={reactLogo} className="app-logo" alt="logo" />
        // <GridDemo />