import React from 'react';
import ReactDOM from 'react-dom';
import Slider from '../slider';
import '../../style/_base.scss';
import Dot from '../dot';
import DotDashboard from '../dot-dashboard';
import StartReset from '../start-reset';

console.log('HIT APP');

class App extends React.Component{
  render(){
    return (

      <div className='app'>
        <Slider />
        <DotDashboard />
        <StartReset />
      </div>

    );
  }
}

export default App;
