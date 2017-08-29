// https://codepen.io/nwst/pen/oZKjbY?editors=1010
// https://codepen.io/Zeaklous/pen/GokAm?editors=0010

import React from 'react';
import TransitionGroup from 'react-addons-transition-group';
import './_dot-animation.scss';
import Anime from 'react-anime';


class DotAnimation extends React.Component{
  render(){
    return(

      <Anime easing="easeInCubic"
        loop={10}
        duration={1000}
        direction="left"
        delay={(el, index) => index * 240}
        translateY='13rem'
        scale={[.9]}>

        <div className="blue"/>
        <div className="green"/>
        <div className="red"/>
      </Anime>
    );
  }
}


export default DotAnimation;
