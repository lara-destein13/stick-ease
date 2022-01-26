// App.js is the top most class component that pulls in and
// renders our front-end layout. It pulls in our canvas and
// composer components defined in separate files. 
import React, { Component } from 'react';
import Canvas from './Canvas';
import Composer from './Composer';
import autoBind from 'auto-bind'; 
import './App.css';


class App extends Component {
  //-----------------------------------------------------------------------------------------------
  // constructor 
  //-----------------------------------------------------------------------------------------------
  // set up the App class component. the autobind(this) component is brought in here to
  // make sure call back functions have access to "this." Google led me to this solution.
  // Each time we create a sticky, is is placed 50px below and 50px to the right of the
  // previous sticky. this.x and this.y are used to track the placement of the previous 
  // sticky. 
  constructor(props) {
    super(props);
    autoBind(this);
    this.x = 50;
    this.y = 50;

    // go into localStorage, get stickies as a string, if the string exists use 
    // JSON.parse to convert it into a sting of objects called stickies. Otherwise
    // initialize stickies to an empty array. 
    let stickies = localStorage.getItem('stickies')
    if (stickies) {
      stickies = JSON.parse(stickies); 
    } else {
      stickies = [];
    }

    // state is a set of variables that are used in the render function. 
    this.state = {
      stickies: stickies,
    };
  }

  //-----------------------------------------------------------------------------------------------
  //  createStickyCallBack
  //-----------------------------------------------------------------------------------------------
  createStickyCallBack(newSticky) {
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
    const stickies = state.stickies;

    stickies.push(newSticky);
    // store stickies array is localStorage. We first convert the array to a string using 
    // JSON.stringify. 
    localStorage.setItem("stickies", JSON.stringify(stickies));
    this.setState({
      stickies, 
    });
  }

  //-----------------------------------------------------------------------------------------------
  //  modifyStickyCallBack
  //-----------------------------------------------------------------------------------------------
  modifyStickyCallBack(modifiedSticky) {
    console.log(JSON.stringify(modifiedSticky));
    // const state = this.state;
    // const stickies = state.stickies;
    // const keepers = [];
    // for (let i = 0; i < stickies.length; i++) {
    //   const sticky = stickies[i];
    //   if (sticky.id != modifiedSticky.id) {
    //     keepers.push(sticky);
    //   }
    //   keepers.push(modifiedSticky);
    // }
    // this.setState({
    //   state: keepers,
    // }); 
    // console.log(modifiedSticky.x);
    // console.log(modifiedSticky.y);
    // console.log(modifiedSticky.height);
    // console.log(modifiedSticky.width);
    // this.forceUpdate();
  }

  //-----------------------------------------------------------------------------------------------
  // render
  //-----------------------------------------------------------------------------------------------
  render() {
    const state = this.state;
    const stickies = state.stickies;

    return (
      <div className="App">
        <Composer createStickyCallBack={this.createStickyCallBack}/>
        <Canvas stickies={stickies} modifyStickyCallBack={this.modifyStickyCallBack}/>
      </div>
    );
  };
}

export default App;
