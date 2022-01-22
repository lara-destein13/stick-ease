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
  // render
  //-----------------------------------------------------------------------------------------------
  render() {
    return (
      <div className="Composer">
          <header className="header">
              <h1 className="h1">Stick Ease</h1>
          </header>
          <form>
          <textarea className="textarea"></textarea>
            <select className="select">
                <option value="pink">pink</option>
                <option value="yellow">yellow</option>
            </select>            
          <button className="button">create note</button>
        </form>
      </div>

    );
  };
}

export default Composer;