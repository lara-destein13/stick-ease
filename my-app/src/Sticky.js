import React, { Component } from 'react';
import { Rnd } from 'react-rnd';
import './Sticky.css';

class Sticky extends Component {
  //-----------------------------------------------------------------------------------------------
  // constructor
  //-----------------------------------------------------------------------------------------------
  constructor(props) {
    super(props);
  }

  //-----------------------------------------------------------------------------------------------
  // onDragStop
  //-----------------------------------------------------------------------------------------------
  onDragStop(x,y) {
    console.log("onDragStop");
    console.log(x);
    console.log(y);
  }
  //-----------------------------------------------------------------------------------------------
  // onResizeStop
  //-----------------------------------------------------------------------------------------------
  onResizeStop(e, direction, ref, delta, position) {
    console.log("onResizeStop");
    const width = ref.style.width;
    const height = ref.style.height;
    console.log(width);
    console.log(height);
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
            <div className="stick">
            {sticky.text},
            </div>
        </Rnd>
    );
  }
};

export default Sticky;