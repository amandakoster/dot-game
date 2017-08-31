// https://codepen.io/nwst/pen/oZKjbY?editors=1010
// https://codepen.io/Zeaklous/pen/GokAm?editors=0010
// https://codepen.io/juliangarnier/pen/vKyLRw?editors=1010

import React from 'react';
import {Motion, spring} from 'react-motion';
import Anime from 'react-anime';

class DotAnimation extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      loop: false,
      duration: 3000,
    };
    this.handleMouseDown=this.handleMouseDown.bind(this);
    this.handleTouchStart=this.handleTouchStart.bind(this);
  }

  handleMouseDown(){
    this.setState({open: !this.state.open});
  }

  handleTouchStart(e){
    e.preventDefault();
    this.handleMouseDown();
  }

  render(){
    return(
      <div>
        <button
          onMouseDown={this.handleMouseDown}
          onTouchStart={this.handleTouchStart}>
          Toggle
        </button>

        <Anime
          targets="div"
          easing="easeInCubic"
          loop={this.props.loop}
          duration={(this.props.duration)}
          direction="left"
          translateY='4rem'>


        </Anime>
      </div>
    );
  }
}

export default DotAnimation;
