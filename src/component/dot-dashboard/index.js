import React from 'react';
import ReactDOM from 'react-dom';
import Dot from '../dot';

class DotDashboard extends React.Component{
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

      <div className="dot-dashboard">
        <p>{this.state.points}</p>
        <Dot id="1" increment={this.increment} />
        <Dot id="2" increment={this.increment} />
        <Dot id="3" increment={this.increment} />
      </div>

    );
  }
}

export default DotDashboard;
