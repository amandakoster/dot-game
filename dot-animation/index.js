import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

let transitionDivStyle = {
  'width': '150px',
  'height': '150px',
  'padding': '10px',
  'margin': '25px',
  'display': 'flex',
  'justifyContent': 'center',
  'alignItems': 'center',
  'cursor': 'pointer',
  'borderRadius': '5px',
};

let btnActive = { 'background': '#06FF96' };
let btnInactive = { 'background': '#FDD692' };

// Root Component:
class Root extends React.Component {
  constructor() {
    super();
    this.state = {
      toggleAll: true,
      fade: true,
      slideUp: true,
      slider: true,
    };

    this.toggleAll = this.toggleAll.bind(this);
    this.toggleSlideUp = this.toggleSlideUp.bind(this);
    this.toggleSlider = this.toggleSlider.bind(this);
  }

  toggleSlideUp() {
    if (!this.state.slideUp) {
      this.setState({
        slideUp: true,
      });
    }
    else {
      this.setState({
        slideUp: false,
      });
    }
  }
  toggleSlider() {
    if (!this.state.slider) {
      this.setState({
        slider: true,
      });
    }
    else {
      this.setState({
        slider: false,
      });
    }
  }

  render() {
    return (
      <div>
        <h1>Dot Animation</h1>
        <Controller
          toggleAllBtns = {this.state.toggleAll}
          slideUp = {this.state.slideUp}
          slider = {this.state.slider}
          toggleAll = {this.toggleAll}
          toggleSlideUp = {this.toggleSlideUp}
          toggleSlider = {this.toggleSlider} />

        <div className = "transitionsContainer">
          <SlideUp slideUp = {this.state.slideUp} toggleSlideUp = {this.toggleSlideUp}/>
          <Slider slider = {this.state.slider} toggleSlider = {this.toggleSlider} />
        </div>
      </div>
    );
  }
}

class Buttons extends React.Component {
  render() {
    let slideUpBtnStyle = btnInactive;

    return (
      <div className = "controlWrapper">
        <button style = {this.props.toggleAll} className = "allBtn">button</button>
        <div className = "controls">
          <button style = {slideUpBtnStyle} onClick = {this.props.toggleSlideUp}>button</button>
          <hr />
        </div>
      </div>
    );
  }
}

class Controller extends React.Component {
  render() {
    let toggleAllText = 'Toggle All On';
    let toggleAllBtnStyle = btnInactive;
    if (this.props.toggleAllBtns) {
      toggleAllBtnStyle = btnActive;
      toggleAllText = 'Toggle All Off';
    }
  }
}

class SlideUp extends React.Component {
  render() {
    let background = {
      'background': '#f8ca00',
    };
    let component;
    if (this.props.slideUp) {
      component = (
        <div style = {Object.assign({}, transitionDivStyle, background)} onClick = {this.props.toggleSlideUp} className = "transitionBox">
          <p>This div slides up and down</p>
        </div>
      );
    }
    return (
      <ReactCSSTransitionGroup
        transitionName = 'slideUpDiv'
        transitionEnterTimeout = {800}
        transitionLeaveTimeout = {800}>
        {component}
      </ReactCSSTransitionGroup>
    );
  }
}

export default SlideUp;
