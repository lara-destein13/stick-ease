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
    this.props.modifyStickyCallBack();
  }
  //-----------------------------------------------------------------------------------------------
  // renderSticky
  //-----------------------------------------------------------------------------------------------
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