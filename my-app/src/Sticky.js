import React, { Component } from 'react';
import { Rnd } from 'react-rnd';
import './Sticky.css';
import autoBind from 'auto-bind'; 

class Sticky extends Component {
  //-----------------------------------------------------------------------------------------------
  // constructor
  //-----------------------------------------------------------------------------------------------
  constructor(props) {
    super(props);
    autoBind(this);
  }

  //-----------------------------------------------------------------------------------------------
  // onDragStop
  //-----------------------------------------------------------------------------------------------
  
  onDragStop(e,position) {
    const props = this.props;
    const sticky = props.sticky;
    const modifyStickyCallBack = props.modifyStickyCallBack;

    sticky.x = position.x;
    sticky.y = position.y;
    modifyStickyCallBack();  
  }

  //-----------------------------------------------------------------------------------------------
  // onResizeStop
  //-----------------------------------------------------------------------------------------------
  onResizeStop(e, direction, ref, delta, position) {
    const props = this.props;
    const sticky = props.sticky;
    const modifyStickyCallBack = props.modifyStickyCallBack;

    let width = ref.style.width;
    width = width.replace('px', "");
    width = parseInt(width);
    let height = ref.style.height;
    height = height.replace('px', "");
    height = parseInt(height);
    sticky.height = height;
    sticky.width = width;
    modifyStickyCallBack();
  }

  //-----------------------------------------------------------------------------------------------
  // render
  //-----------------------------------------------------------------------------------------------
  render() {
    const props = this.props;
    const sticky = props.sticky;

    const def = {
        x: sticky.x,
        y: sticky.y,
        width: sticky.width,
        height: sticky.height,
    };

    return (
        <Rnd default={def}      
        onDragStop={this.onDragStop}
        onResizeStop={this.onResizeStop}       
        >            
            <div className="Sticky">
            {sticky.text}
            </div>
        </Rnd>
    );
  }
};

export default Sticky;