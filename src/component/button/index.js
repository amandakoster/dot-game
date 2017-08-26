import React from 'react';
import ReactDOM from 'react-dom';
import './_button.scss';

console.log('BUTTON');

let renderIf = (test, component) => test ? component : undefined;

class Button extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      show:true,
      value:'10',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {this.setState({show: true});}

  render(){
    return (

      <div className='button'>
        <p onClick={this.handleClick}>{this.props.item}</p>
        {renderIf(this.state.show === true,
          <button className="button-remove" onClick={() => this.setState({show: false})}>click</button>)}
        <div className="move-me move-me-1">1</div>
        <div className="move-me move-me-2">2</div>
        <div className="move-me move-me-3">3</div>
      </div>

    );
  }
}

export default Button;
