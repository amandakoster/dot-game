import React from 'react';
import ReactDOM from 'react-dom';
import Slider from '../slider';
import '../../style/_base.scss';
import Dot from '../dot';
import DotDashboard from '../dot-dashboard';
import DotAnimation from '../dot-animation';

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
