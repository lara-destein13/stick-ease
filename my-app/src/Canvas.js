import React, { Component } from 'react';
import Sticky from './Sticky';
import stickies from './Stickies';
import './Canvas.css';

class Canvas extends Component {
  //-----------------------------------------------------------------------------------------------
  // constructor
  //-----------------------------------------------------------------------------------------------
  constructor(props) {
    super(props);
  }
  //-----------------------------------------------------------------------------------------------
  // renderSticky
  //-----------------------------------------------------------------------------------------------
  renderSticky(sticky) {
      const key = JSON.stringify(sticky);
      return(
          <Sticky sticky={sticky} key={key}/>
      );
  }

  //-----------------------------------------------------------------------------------------------
  // render
  //-----------------------------------------------------------------------------------------------
  render() {
    return (
      <div className="Canvas">
          {stickies.getStickies().map((m) => this.renderSticky(m))}
      </div>
    );
  };
}

export default Canvas;