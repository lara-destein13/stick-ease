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
    this.text = "";
  }

  //-----------------------------------------------------------------------------------------------
  // button clicked
  //-----------------------------------------------------------------------------------------------
  buttonClicked() {
    const props = this.props;  
    const createStickyCallBack = props.createStickyCallBack;
    const newSticky = {
      backgroundColor: 'lightblue',
      height: 300,
      id: Date.now(),
      width: 300,
      text: this.text,
      x: 70,
      y: 70,
    };


    console.log("button clicked");
    createStickyCallBack(newSticky);
  }


  //-----------------------------------------------------------------------------------------------
  // textAreaChanged
  //--------------------------------------------------------------------------------------------
  textAreaChanged(event) {
    this.text = event.target.value
    console.log(this.text);
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
          <textarea className="textarea" onChange={this.textAreaChanged}></textarea>
          <button className="button" onClick={this.buttonClicked}>create note</button>
      </div>

    );
  };
}

export default Composer;