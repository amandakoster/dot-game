// https://codepen.io/bullerb/pen/gMpxNZ?q=react%20animation&limit=all&order=popularity&depth=everything&show_forks=false

import React from 'react';
import ReactDOM from 'react-dom';
import { PlayButton, PauseButton } from 'react-player-controls';
import './_slider.scss';

class Slider extends React.Component {
  constructor() {
    super();
    this.state = { value : 25 };
  }

  getInitialState() {
    return {
      value: 25,
    };
  }

  setValue() {
    this.setState( { value: this.refs.range.value } );
  }

  render() {
    return (
      <div className="slider-input">
        <input
          ref="range"
          type="range"
          min="0"
          max="100"
          defaultValue={ this.state.value }
          onChange={ this.setValue.bind(this) }
        />
        <SliderValue current={ this.state.value } />
      </div>
    );
  }
}

class SliderValue extends React.Component {
  constructor() {
    super();
    this.percentage = 25;
  }

  getPercentage() {
    this.percentage = this.props.current;
  }

  getStyle() {
    if(this.percentage <= 20) {
      this.style = 'slow';
    }
    else if(this.percentage > 20 && this.percentage <=50) {
      this.style = 'med';
    }
    else {
      this.style= 'fast';
    }
  }

  render() {
    this.getPercentage();
    this.getStyle();
    return (
      <div className="bar">
        <p className="percentage">{ this.percentage } </p>
        <div style={{ width: this.percentage + '%' }} className= { 'fill '+ this.style }></div>
      </div>
    );
  }
}

export default Slider;
