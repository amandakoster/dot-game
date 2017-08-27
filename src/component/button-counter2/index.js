// https://toddmotto.com/react-create-class-versus-component/
// https://codepen.io/ajcbrown820/pen/eZdWaj?editors=0010


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
      <div id='counter'>{this.state.counter}</div>
      <button onClick = {this.increment}> ButtonCounter2 Add 1 </button>
      <button onClick = {this.decrement}> ButtonCounter2 Minus 1 </button>
    </div>;
  },
});

export default ButtonCounter2;
