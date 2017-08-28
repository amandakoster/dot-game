import React from 'react';
import ReactDOM from 'react-dom';
import ButtonDelete from '../button-delete';

class ButtonDashboard extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      points: 0,
    };

    this.increment=this.increment.bind(this);
  }

  increment(points){this.setState({points: this.state.points + points});}

  render(){
    return (

      <div className="buttons">
        <p>{this.state.points}</p>
        <ButtonDelete id="1" increment={this.increment} />
        <ButtonDelete id="2" increment={this.increment} />
        <ButtonDelete id="3" increment={this.increment} />
      </div>

    );
  }
}

export default ButtonDashboard;
