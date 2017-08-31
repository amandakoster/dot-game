// https://codepen.io/nwst/pen/oZKjbY?editors=1010
// https://codepen.io/Zeaklous/pen/GokAm?editors=0010
// https://codepen.io/juliangarnier/pen/vKyLRw?editors=1010

import React from 'react';
// import {Motion, spring} from 'react-motion';
import Anime from 'react-anime';

class DotAnimation extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      loop: true,
      isToggleOn: true,
    };
    // this.handleMouseDown=this.handleMouseDown.bind(this);
    // this.handleTouchStart=this.handleTouchStart.bind(this);
    this.handleClick=this.handleClick.bind(this);
  }

  // handleMouseDown(){
  //   this.setState({loop: true});
  // }
  //
  // handleTouchStart(e){
  //   e.preventDefault();
  //   this.handleMouseDown({loop: true});
  // }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render(){
    return(
      <div>
        <button
          onMouseDown={this.handleMouseDown}
          onTouchStart={this.handleTouchStart}>
          Toggle
        </button>

        <button onClick={this.handleClick}>
          {this.state.loop ? this.istoggleON : this.isToggleOff}
        </button>

        <Anime
          targets="div"
          easing="easeInCubic"
          loop={this.state.loop}
          duration={9000}
          direction="left"
          translateY='7em'>


        </Anime>
      </div>
    );
  }
}

export default DotAnimation;
