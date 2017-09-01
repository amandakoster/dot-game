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
      loop: true,
      duration: 7000,
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

        <Anime
          targets=".dot"
          easing="easeInCubic"
          loop={this.props.loop}
          duration= "7000"
          direction="left"
          loop="true"
          translateY="300">


          <div class="line player"> <button class="play">Play</button> <button class="pause">Pause</button> </div>

        document.querySelector('#playPause .play').onclick = playPause.play;
document.querySelector('#playPause .pause').onclick = playPause.pause;
        </Anime>
      </div>
    );
  }
}

export default DotAnimation;
