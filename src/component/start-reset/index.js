// https://codepen.io/nwst/pen/oZKjbY?editors=1010
// https://codepen.io/Zeaklous/pen/GokAm?editors=0010

import React from 'react';
import './_start-stop.scss';



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
        {this.state.showAnimation && <div className='dot-sample' />}

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
