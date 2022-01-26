import React, { Component } from 'react';
import stickies from './Stickies';
import Canvas from './Canvas';
import Composer from './Composer';
import autoBind from 'auto-bind';
import './App.css';
import Sticky from './Sticky';

class App extends Component {
  //-----------------------------------------------------------------------------------------------
  // constructor
  //-----------------------------------------------------------------------------------------------
  constructor(props) {
    super(props);
    autoBind(this);
    this.x = 50;
    this.y = 50;


    let stickies = localStorage.getItem('stickies')
    if (stickies) {
      stickies = JSON.parse(stickies); 
    } else {
      stickies = [];
    }


    this.state = {
      stickies,
    };
  }

  //-----------------------------------------------------------------------------------------------
  //  appCallBack
  //-----------------------------------------------------------------------------------------------
  appCallBack(newSticky) {
    newSticky.x = this.x;
    this.x += 50;
    if (this.x > 300) {
      this.x = 50;
    }
    newSticky.y = this.y;
    this.y += 50;
    if (this.y > 300) {
      this.y = 50;
    }
    console.log("composerCallBack");
    const state = this.state;
    // const stickies = JSON.parse(JSON.stringify(state.stickies));
    const stickies = state.stickies;


    stickies.push(newSticky);
    this.setState({
      stickies, 
    });
  }


  //-----------------------------------------------------------------------------------------------
  // render
  //-----------------------------------------------------------------------------------------------
  render() {
    const state = this.state;
    const stickies = state.stickies;

    return (
      <div className="App">
        <Composer appCallBack={this.appCallBack}/>
        <Canvas stickies={stickies}/>
      </div>
    );
  };
}

export default App;
