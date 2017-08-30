// https://codepen.io/nwst/pen/oZKjbY?editors=1010
// https://codepen.io/Zeaklous/pen/GokAm?editors=0010
// https://codepen.io/juliangarnier/pen/vKyLRw?editors=1010

import React from 'react';
import ReactDom from 'react-dom';
import './_dot-animation.scss';
import Anime from 'react-anime';

let node = document.getElementById('app');

let playButton = document.querySelector('.play');
let pauseButton = document.querySelector('.pause');
let restartButton = document.querySelector('.restart');


class DotAnimation extends React.Component{
  render(){
    return(

      <div><Anime
        targets="div"
        easing="easeInCubic"
        loop={15}
        duration={1000}
        direction="left"
        delay={(el, index) => index * 240}
        translateY='13rem'
        scale={[.9]}>

        <div className="blue"/>
        <div className="green"/>
        <div className="red"/>
        <div className="play"/>
        <div className="pause"/>
        <div className="restart"/>

      </Anime>

      </div>
    );
  }
}


export default DotAnimation;
