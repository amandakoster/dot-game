// https://codepen.io/nwst/pen/oZKjbY?editors=1010
// https://codepen.io/Zeaklous/pen/GokAm?editors=0010
// https://codepen.io/juliangarnier/pen/vKyLRw?editors=1010

import React from 'react';
import ReactDom from 'react-dom';
import './_dot-animation.scss';
import Anime from 'react-anime';

var playButton = document.querySelector('.play');
var pauseButton = document.querySelector('.pause');
var restartButton = document.querySelector('.restart');
var progress = document.querySelector('.progress');

playButton.addEventListener('click', function() { DotAnimation.play(); });
pauseButton.addEventListener('click', function() { DotAnimation.pause(); });
restartButton.addEventListener('click', function() { DotAnimation.restart(); });



class DotAnimation extends React.Component{
  render(){
    return(

      <div>
        <Anime
          targets="div"
          easing="easeInCubic"
          loop={3}
          duration={(7000)}
          direction="left"
          delay={(el, index) => index * 240}
          translateY='7rem'>

          <div className="blue"/>
          <div className="green"/>
          <div className="red"/>

          <button class="play">Play</button>
          <button class="pause">Pause</button>
          <button class="restart">Restart</button>

        </Anime>
      </div>
    );
  }
}


export default DotAnimation;
