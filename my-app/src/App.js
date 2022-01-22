import React, { Component } from 'react';
import stickies from './Stickies';
import './App.css';

class App extends Component {
  //-----------------------------------------------------------------------------------------------
  // constructor
  //-----------------------------------------------------------------------------------------------
  constructor(props) {
    super(props);
    this.stickies = stickies.getStickies();
    console.log(JSON.stringify(this.stickies, null, 4));
  }

  //-----------------------------------------------------------------------------------------------
  // render
  //-----------------------------------------------------------------------------------------------
  render() {
    return (
      <div className="App">Hello</div>
    );
  };
}

export default App;
