import React from 'react';
import ReactDOM from 'react-dom';

console.log('BUTTON');

let renderIf = (test, component) => test ? component : undefined;

class ButtonDelete extends React.Component{
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
          <button className="button-remove" onClick={() => this.setState({show: false})}>Delete Button</button>)}
        <p>Deleted</p>
      </div>

    );
  }
}

export default ButtonDelete;
