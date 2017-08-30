// https://codepen.io/zlajaa1/pen/wMoXqX?editors=0010

import React from 'react';
import { startButton, PauseButton } from 'react-player-controls';
import DotAnimation from '../dot-animation';

class Buttons extends React.Component{
  startAnimation(){
    console.log('HIT SP 2');
    this.refs.aniRef.play();
  }

  pauseAnimation(){
    this.refs.aniRef.pause();
  }

  render(){
    console.log('HIT SP 2');
    return(

      <div>
        <div className='ani-ref'
          ref="aniRef">{DotAnimation}</div>

        <div className='ani-buttons'>
          <Buttons
            startAnimation={this.startAnimation.bind(this)}
            pauseAnimation={this.pauseAnimation.bind(this)} />
        </div>
      </div>
    );
  }
}

class StartPause2 extends React.Component{

  render(){
    console.log('HIT SP 2');
    return(
      <div>
        <button id='startButton' onClick={this.props.startAnimation}>Start!</button>
        <button id='pauseAnimation'
          onClick={this.pauseAnimation}>Pause!</button>
      </div>
    );
  }
}

export default StartPause2;
