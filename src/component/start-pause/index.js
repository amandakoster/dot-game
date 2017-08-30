// https://codepen.io/nwst/pen/oZKjbY?editors=1010
// https://codepen.io/Zeaklous/pen/GokAm?editors=0010
// *** https://www.sitepoint.com/animating-the-dom-with-anime-js/
// *** https://codepen.io/juliangarnier/pen/RRKpgq

import React from 'react';
import './_start-pause.scss';

class StartPause extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
      showAnimation: true,
    };
    this.handleClick = this.handleClick.bind(this);
    this.toggleAnimation = this.toggleAnimation.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn:!prevState.isToggleOn,
    }));
  }

  toggleAnimation(){
    this.setState({
      showAnimation: ! this.state.showAnimation,
    });
  }

  render() {
    return (

      <button className='start-button'
        onClick={this.handleClick}>
        {this.state.isToggleOn ? 'START' : 'PAUSE'}
      </button>


    );
  }
}


export default StartPause;
