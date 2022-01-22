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
        <Rnd default={def}>
            {sticky.text},
        </Rnd>
    );
  }
};

export default Sticky;