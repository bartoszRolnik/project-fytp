import React, { Component } from 'react';
import './App.css'
import Header from './components/Header'
import Button from './components/Button';
import AboutYou from './components/AboutYou';
import TripPreferences from './components/TripPreferences'




class App extends Component {
  render() {
      return (
              <div>
                  <Header/>
                  <AboutYou/>
                  <TripPreferences/>
              </div>
         
      );
  }
}

export default App;
