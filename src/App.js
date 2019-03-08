import React, { Component } from 'react';
import './App.css';
import Header from './header'
import Banner from './banner';
import Newsletter from './newsletter';
import Main from './main';
import Aside from './aside';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Banner/>
        <Newsletter/>
        <Main/>
        <Aside/>
      </div>
    );
  }
}

export default App;
