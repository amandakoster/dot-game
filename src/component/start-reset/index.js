// https://codepen.io/nwst/pen/oZKjbY?editors=1010
// https://codepen.io/Zeaklous/pen/GokAm?editors=0010

import React from 'react';



class StartReset extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
      dotsAnimate: true,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn:!prevState.isToggleOn,
    }));
  }

  render() {
    return (

      <button className='start-button'
        onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}


export default StartReset;
