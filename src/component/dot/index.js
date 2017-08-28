import React from 'react';
import ReactDOM from 'react-dom';

console.log('HIT DOT');

function getRandomArbitrary(min, max){
  return Math.random() * (max - min) + min;}

class Dot extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      points: props.increment,
      size:getRandomArbitrary(10, 100),
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick()
  {this.state.points(Math.ceil((1 / this.state.size) * 100));
    this.setState({size:getRandomArbitrary(10, 100)});
    console.log('hello', 1/this.state.size);
  }

  render(){
    let style={
      height: '' +  this.state.size +'px',
      width: '' + this.state.size +'px',
    };

    return (
      <div className='button'
        style={style}
        onClick={this.handleClick}>
      </div>

    );
  }
}

export default Dot;
