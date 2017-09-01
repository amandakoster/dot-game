import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Dot from '../dot';
import'./_dot-dashboard.scss';

class DotDashboard extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      points: 0,
      toggleAll: true,
      slideIn:true,
      slideUp: true,
      sldier: true,
      height: true,
    };

    this.increment=this.increment.bind(this);
  }

  increment(points){this.setState({points: this.state.points + points});}

  render(){
    return (
      <div className="dot-dashboard">
        <p>{this.state.points}</p>
        <Dot className="animation" id="1" increment={this.increment} />
        <Dot id="2" increment={this.increment} />
        <Dot id="3" increment={this.increment} />
      </div>

    );
  }
}

export default DotDashboard;
