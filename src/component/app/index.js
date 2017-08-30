import React from 'react';
import ReactDOM from 'react-dom';
import Slider from '../slider';
import '../../style/_base.scss';
import Dot from '../dot';
import DotDashboard from '../dot-dashboard';
// import StartPause from '../start-pause';
import StartPause2 from '../start-pause2';
// import StartPause3 from '../start-pause3';
import DotAnimation from '../dot-animation';
// import '../playback-test';

console.log('HIT APP');

class App extends React.Component{
  render(){
    return (

      <div className='app'>
        <Slider />
        <DotDashboard />
        <DotAnimation / >
      </div>

    );
  }
}

export default App;
