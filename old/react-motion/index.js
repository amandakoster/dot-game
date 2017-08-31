
import React from 'react';
import {Motion, spring} from 'react-motion';
import './_react-motion.scss';
import DotAnimation from '../dot-animation';


class ReactMotion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      loop: 0,
      duration: 7000,
    };

    this.handleMouseDown=this.handleMouseDown.bind(this);
    this.handleTouchStart=this.handleTouchStart.bind(this);
  }

  handleMouseDown(){
    this.setState({open: !this.state.open});
  }

  handleTouchStart(e){
    e.preventDefault();
    this.handleMouseDown();
  }

  render() {
    return (
      <div>
        <button
          onMouseDown={this.handleMouseDown}
          onTouchStart={this.handleTouchStart}>
            Toggle
        </button>

        <Motion style={{x: spring(this.state.open ? 400 : 0)}}>
          {({x}) =>
            <div>
              <DotAnimation loop={this.state.loop} duration={this.state.duration}/>
              <div className="demo0">
                <div className="demo0-block" style={{
                  WebkitTransform: `translate3d(${x}px, 0, 0)`,
                  transform: `translate3d(${x}px, 0, 0)`,
                }} />
              </div>
            </div>
          }
        </Motion>
      </div>
    );
  }
}

export default ReactMotion;
