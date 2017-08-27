// https://toddmotto.com/react-create-class-versus-component/
// https://codepen.io/ajcbrown820/pen/eZdWaj?editors=0010
// https://medium.com/@aghh1504/2-increment-and-decrease-number-onclick-react-5767b765103c
// https://codepen.io/amandakoster/pen/JyawpB?editors=0010

import React from 'react';

var ButtonCounter2 = React.createClass({
  getInitialState: function() {
    return {
      counter: 0,
    };
  },

  increment: function() {
    this.setState({
      counter: this.state.counter + 1,
    });
  },

  decrement: function(){
    this.setState({
      counter: this.state.counter - 1,
    });
  },

  render: function() {
    return <div>
      <div >{this.state.counter}</div>
      <button
        className='dot fadeInDown'
        onClick = {this.increment}> Button + 1 </button>
      <button
        className='dot'
        onClick = {this.decrement}> Button - 1 </button>
    </div>;

  },
});

export default ButtonCounter2;
