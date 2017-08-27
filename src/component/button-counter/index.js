// https://gist.github.com/mkhoeini/b4e09571a70cef017e6d

import React from 'react';
import ReactDom from 'react-dom';

class ButtonCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {counter: 0};


    this.handleClick=this.handleClick.bind(this);
  }

  handleClick() {
    var newCount = this.state.count + 1;
    this.setState({count: newCount });
  }

  render() {
    return(
      <div className='button-counter'>

        <p>ButtonCounter1 {this.state.count}</p>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

export default ButtonCounter;
