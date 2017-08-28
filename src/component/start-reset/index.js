// https://codepen.io/nwst/pen/oZKjbY?editors=1010
// https://codepen.io/Zeaklous/pen/GokAm?editors=0010

import React from 'react';
import TransitionGroup from 'react-addons-transition-group';
import {TweenMax, Power2, TimelineLite} from 'gsap';
import './_start-stop.scss';

class DotAnimation extends React.Component{

  componentWillLeave(callback){
    const el = this.container;
    TweenMax.fromTo(el, 0.9, {y: 0, opacity: 1}, {y: 500, opacity: 1, onComplete: callback});
  }

  render() {
    return(
      <div className='dot-sample'ref={c => this.container =c} />
    );
  }
}

class StartReset extends React.Component {
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

      <div className='toggle-animate'>
        <TransitionGroup>
          {this.state.showAnimation && <DotAnimation />}
        </TransitionGroup>

        <div>
          <button className = 'toggle-button'
            onClick={this.toggleAnimation}>
          </button>
        </div>

        <button className='start-button'
          onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      </div>

    );
  }
}


export default StartReset;
