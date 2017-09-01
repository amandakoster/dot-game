import React from 'react';
import ReactDOM from 'react-dom';
import Dot from '../dot';
import DotDashboard from '../dot-dashboard';
import ReactMotion from  '../react-motion';
import Slider from  '../slider';
import DotAnimation from '../dot-animation';
import '../../style/_base.scss';


class App extends React.Component{
  render(){
    return (

      <div className='app'>
        <Slider />
        <DotDashboard />
        <ReactMotion />
        <DotAnimation />
      </div>

    );
  }
}

export default App;
