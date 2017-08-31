import React from 'react';
import {Motion, spring} from 'react-motion';
import ReactDOM from 'react-dom';
import Dot from '../dot';
import DotDashboard from '../dot-dashboard';
import ReactMotion from  '../react-motion';
import Slider from  '../slider';
import Anime from 'react-anime';
import '../../style/_base.scss';

class App extends React.Component{
  render(){
    return (

      <div className='app'>
        <Slider />
        <DotDashboard />
        <ReactMotion />
      </div>

    );
  }
}

export default App;
