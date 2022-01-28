// the Composer is the component that appears as a black column
// on the left side of the browser with a textarea and button that
// allows users to create new sticky notes. 
import React, { Component } from 'react';
import autoBind from 'auto-bind';
import './Composer.css';

class Composer extends Component {
  //-----------------------------------------------------------------------------------------------
  // constructor
  //-----------------------------------------------------------------------------------------------
  // Here we set up the Composer class component. Set the the text of the
  // sticky to an empty string. Initialize text variable to an empty string. We update
  // the text varibale every time the textarea is changed. 
  constructor(props) {
    super(props);
    autoBind(this);
    this.text = "";
  }

  //-----------------------------------------------------------------------------------------------
  // button clicked
  //-----------------------------------------------------------------------------------------------
  // Event listener and handler for our "create note" button in our Composer.
  // When the button is clicked, the new sticky is assigned some default 
  // properties and values. We grab the textarea element by its id and
  // set its value to an empty string. We call our createStickyCallBack funtion in the
  // app component and pass in our newSticky.
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

    const textarea = document.getElementById("textarea");
    textarea.value = "";

    console.log("button clicked");
    createStickyCallBack(newSticky);
  }

  //-----------------------------------------------------------------------------------------------
  // textAreaChanged
  //--------------------------------------------------------------------------------------------
  // A function that recognizes when our textarea is changed. It grabs the value of the
  // textarea element and saves it to our text variable. 
  textAreaChanged(event) {
    this.text = event.target.value;
  }

  //-----------------------------------------------------------------------------------------------
  // render
  //-----------------------------------------------------------------------------------------------
  // A function called by react. It returns markup to be rendered by react. In this case
  // it returns our header, textarea, and button.
  render() {

    return (
        <div className="Composer">
            <header className="header">
                <h1 className="h1">Stick Ease</h1>
            </header>
            <textarea className="textarea" id="textarea" onChange={this.textAreaChanged} placeholder='type anything here...'></textarea>
            <button className="button" onClick={this.buttonClicked}>create note</button>
        </div>
    );
  };
}

export default Composer;