import autoBind from 'auto-bind'; 
import React, { Component } from 'react';
import './Canvas.css';

class SignUp extends Component {
  //-----------------------------------------------------------------------------------------------
  // constructor
  //-----------------------------------------------------------------------------------------------
  constructor(props) {
    super(props);
    autoBind(this);
  }

  //-----------------------------------------------------------------------------------------------
  // render
  //-----------------------------------------------------------------------------------------------
  render() {
    return (
      <div className="SignUp">
        foo
      </div>
    );
  };
}

export default SignUp;