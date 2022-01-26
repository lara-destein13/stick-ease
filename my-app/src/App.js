import React, { Component } from 'react';
import stickies from './Stickies';
import Canvas from './Canvas';
import Composer from './Composer';
import './App.css';

class App extends Component {
  //-----------------------------------------------------------------------------------------------
  // constructor
  //-----------------------------------------------------------------------------------------------
  constructor(props) {
    super(props);

    const stickies = [];
    
    stickies.push({
        backgroundColor: 'pink',
        height: 300,
        width: 300,
        text: 'You got this!',
        x: 50,
        y: 50,
    });

    stickies.push({
        backgroundColor: 'yellow',
        height: 300,
        width: 300,
        text: 'Effort is more important than perfection',
        x: 60,
        y: 60,
    });

    stickies.push({
        backgroundColor: 'lightblue',
        height: 300,
        width: 300,
        text: 'Just keep coding :)',
        x: 70,
        y: 70,
    });

    this.state = {
      stickies,
    };
  }

  //-----------------------------------------------------------------------------------------------
  // composer callBack
  //-----------------------------------------------------------------------------------------------
  composerCallBack() {
    console.log("composerCallBack");
  }


  //-----------------------------------------------------------------------------------------------
  // render
  //-----------------------------------------------------------------------------------------------
  render() {
    const state = this.state;
    const stickies = state.stickies;

    return (
      <div className="App">
        <Composer appCallBack={this.composerCallBack}/>
        <Canvas stickies={stickies}/>
      </div>
    );
  };
}

export default App;
