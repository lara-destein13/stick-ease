import React, { Component } from 'react';
import Sticky from './Sticky';
import './Canvas.css';

class Canvas extends Component {
  //-----------------------------------------------------------------------------------------------
  // constructor
  //-----------------------------------------------------------------------------------------------
  constructor(props) {
    super(props);
    this.key = 1;
  }
  //-----------------------------------------------------------------------------------------------
  // renderSticky
  //-----------------------------------------------------------------------------------------------
  renderSticky(sticky) {
    this.key++;
      return(
          <Sticky sticky={sticky} key={this.key}/>
      );
  }

  //-----------------------------------------------------------------------------------------------
  // render
  //-----------------------------------------------------------------------------------------------
  render() {
    const props = this.props;
    const stickies = props.stickies;
    return (
      <div className="Canvas">
          {stickies.map((m) => this.renderSticky(m))}
      </div>
    );
  };
}

export default Canvas;