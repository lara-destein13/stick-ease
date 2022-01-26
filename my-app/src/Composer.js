import React, { Component } from 'react';
import './Composer.css';

class Composer extends Component {
  //-----------------------------------------------------------------------------------------------
  // constructor
  //-----------------------------------------------------------------------------------------------
  constructor(props) {
    super(props);
  }

  //-----------------------------------------------------------------------------------------------
  // button clicked
  //-----------------------------------------------------------------------------------------------
  buttonClicked() {
    console.log("button clicked");
  }


  //-----------------------------------------------------------------------------------------------
  // render
  //-----------------------------------------------------------------------------------------------
  render() {
    const newSticky = {
      backgroundColor: 'lightblue',
      height: 300,
      width: 300,
      text: 'Just keep coding :)',
      x: 70,
      y: 70,
  };

  return (
      <div className="Composer">
          <header className="header">
              <h1 className="h1">Stick Ease</h1>
          </header>
          <p>foo</p>
          <button onClick={this.buttonClicked}>click this</button>
          <form>
            <textarea className="textarea"></textarea>   
            <button className="button" onClick={this.buttonClicked}>create note</button>   
        </form>
      </div>

    );
  };
}

export default Composer;