import React from 'react';
import {Motion, spring} from 'react-motion';
import ReactDOM from 'react-dom';
import Dot from '../dot';
import DotDashboard from '../dot-dashboard';
import ReactMotion from  '../react-motion';
import Slider from  '../slider';

import '../../style/_base.scss';

console.log('HIT APP');

class App extends React.Component{
  render(){
    return (

      <div className='app'>
        <Slider />
        <DotDashboard />
        <Motion defaultStyle={{x: 0}} style={{x: spring(10)}}>
          {value => <div>{value.x}</div>}
        </Motion>
      </div>

    );
  }
}

export default App;
