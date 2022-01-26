import React, { Component } from 'react';
import autoBind from 'auto-bind';
import './Composer.css';

class Composer extends Component {
  //-----------------------------------------------------------------------------------------------
  // constructor
  //-----------------------------------------------------------------------------------------------
  constructor(props) {
    super(props);
    autoBind(this);
  }

  //-----------------------------------------------------------------------------------------------
  // button clicked
  //-----------------------------------------------------------------------------------------------
  buttonClicked() {
    const props = this.props;  
    const appCallBack = props.appCallBack;
    const newSticky = {
      backgroundColor: 'lightblue',
      height: 300,
      width: 300,
      text: 'Just keep coding :)',
      x: 70,
      y: 70,
    };
    console.log("button clicked");
    appCallBack(newSticky);
  }


  //-----------------------------------------------------------------------------------------------
  // render
  //-----------------------------------------------------------------------------------------------
  render() {


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