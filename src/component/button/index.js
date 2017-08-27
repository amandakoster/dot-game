// https://medium.com/@aghh1504/2-increment-and-decrease-number-onclick-react-5767b765103c

import React from 'react';
import ReactDOM from 'react-dom';


console.log('BUTTON');
let renderIf = (test, component) => test ? component : undefined;

let IncrementItem = () => {
  this.setState({ clicks: this.state.clicks + 1 });
};

class Button extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      show:true,
      clicks: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {this.setState({show: true});}


  render(){
    return(


      <div>
        <button className="button-increment" onClick={this.IncrementItem}>Click to increment by 1</button>
        {this.state.show ? <h2>{this.state.clicks}</h2> : '' }
        

        <button className="button-1">button-1</button>
      </div>

    );
  }
}

export default Button;
