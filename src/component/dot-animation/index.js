// https://codepen.io/nwst/pen/oZKjbY?editors=1010
// https://codepen.io/Zeaklous/pen/GokAm?editors=0010
// https://codepen.io/juliangarnier/pen/vKyLRw?editors=1010

import React from 'react';
import ReactDom from 'react-dom';
import './_dot-animation.scss';
import Anime from 'react-anime';

function PlayButton(props) {
  return (
    <button onClick={props.onClick}>
      Play
    </button>
  );
}

function PauseButton(props) {
  return (
    <button onClick={props.onClick}>
      Pause
    </button>
  );
}

class DotAnimation extends React.Component{
  constructor(props){
    super(props);
    this.handlePlayButton=this.handlePlayButton.bind(this);
    this.handlePauseButton=this.handlePauseButton.bind(this);
    this.state = {isAnimating: false};
  }

  handlePlayButton() {
    this.setState({isAnimating: true});
  }

  handlePauseButton() {
    this.setState({isAnimating: false});
  }

  render(){
    const isAnimating=this.state.isAnimating;

    return(
      <div>
        <Anime
          targets="div"
          easing="easeInCubic"
          loop={3}
          duration={(7000)}
          direction="left"
          translateY='7rem'>
        </Anime>

        {isAnimating ? (
          <PauseButton onClick={this.handlePauseButton} />
        ) : (
          <PlayButton onClick={this.handlePlayButton} />
        )}
      </div>
    );
  }
}


export default DotAnimation;
