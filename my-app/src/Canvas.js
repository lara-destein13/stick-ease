// The Canvas component is a child to the App component and
// appears as the large white space on the right side of the 
// browser that will store all generated stickys. 
import React, { Component } from 'react';
import Sticky from './Sticky';
import './Canvas.css';
import autoBind from 'auto-bind'; 

class Canvas extends Component {
  //-----------------------------------------------------------------------------------------------
  // constructor
  //-----------------------------------------------------------------------------------------------
  // Here we set up the Canvas class component. 
  constructor(props) {
    super(props);
    autoBind(this);
    this.key = 1;
  }
  //-----------------------------------------------------------------------------------------------
  // renderSticky
  //-----------------------------------------------------------------------------------------------
  // A function that renders markup for a single sticky.
  renderSticky(sticky) {
    this.key++;
    const props = this.props;
    const modifyStickyCallBack = props.modifyStickyCallBack
      return(
          <Sticky sticky={sticky} key={this.key} modifyStickyCallBack={modifyStickyCallBack}/>
      );
  }

  //-----------------------------------------------------------------------------------------------
  // render
  //-----------------------------------------------------------------------------------------------
  // A function called by react. It returns markup to be rendered by react. In this case
  // it returns markup containing a single div. We use map to iterate over our array
  // of stickies.For each sticky we call renderSticky above. 
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