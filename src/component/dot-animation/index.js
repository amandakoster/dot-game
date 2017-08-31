// https://codepen.io/nwst/pen/oZKjbY?editors=1010
// https://codepen.io/Zeaklous/pen/GokAm?editors=0010
// https://codepen.io/juliangarnier/pen/vKyLRw?editors=1010

import React from 'react';
import ReactDom from 'react-dom';
// import './_dot-animation.scss';
import Anime from 'react-anime';

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

          <button className="play">Play</button>
          <button className="pause">Pause</button>
          <button classname="restart">Restart</button>

        </Anime>
      </div>
    );
  }
}


export default DotAnimation;
