import React from 'react';
import './_start-pause3.scss';
import Anime from 'react-anime';

class PlayPause3 extends React.Component{
  render(){
    return(

      <Anime
        translateX= '250'
        delay= {(el, i, l) => i * 100}
        direction= 'alternate'
        loop= {true}
        autoplay= {false}>
        <button className="play">Play</button>
        <button className="pause">Pause</button>

      </Anime>

    );
  }
}

export default PlayPause3;
