import React from 'react';
import ReactDOM from 'react-dom';
import Slider from '../slider';
import '../../style/_base.scss';
import ButtonDelete from '../button-delete';
import ButtonDashboard from '../button-dashboard';
import StartReset from '../start-reset';

console.log('HIT APP');

class App extends React.Component{
  render(){
    return (

      <div className='app'>
        <Slider />
        <ButtonDashboard />
        <StartReset />
      </div>

    );
  }
}

export default App;
