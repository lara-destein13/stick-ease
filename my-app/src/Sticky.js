// the Sticky component is a child to the Canvas component and is created
// an indefinite amount of times depending on how many times a user clicks 
// the "create note" button. Most of our work with reactRND is contained in 
// this class component as the Sticky component is the draggable and 
// resizable element in the application. 
import React, { Component } from 'react';
import { Rnd } from 'react-rnd';
import './Sticky.css';
import autoBind from 'auto-bind'; 

class Sticky extends Component {
  //-----------------------------------------------------------------------------------------------
  // constructor
  //-----------------------------------------------------------------------------------------------
  // Here we set up the Sticky class component
  constructor(props) {
    super(props);
    autoBind(this);
  }

  //-----------------------------------------------------------------------------------------------
  // onDragStop
  //-----------------------------------------------------------------------------------------------
  // Each sticky is draggable. At the end of a drag event RND calls this callback function, 
  // and passes the new x and y. This function (1) captures the x and y. (2) saves the x
  // and y in the sticky. (3) calls the call back function in our app 
  // to write all stickies to localStorage. 
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
  // Each sticky is resizable. At the end of a size event RND calls this callback function, 
  // and passes the new height and width. This function (1) captures the height and width. 
  // (2) saves the height and width in the sticky. (3) calls the call back function in our app 
  // to write all stickies to localStorage. 
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
  // A function called by react. It returns markup to be rendered by react. In this case
  // it returns  markup containing an RND tag.  
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