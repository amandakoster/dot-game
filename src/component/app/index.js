import React from 'react';
import ReactDOM from 'react-dom';
import Slider from '../slider';
import '../../style/_base.scss';
import ButtonCounter2 from '../button-counter2';
import ButtonDelete from '../button-delete';

console.log('HIT APP');

class App extends React.Component{
  render(){
    return (

      <div className='app'>
        <Slider />
        <ButtonCounter2 />
        <ButtonDelete/>
      </div>

    );
  }
}

export default App;
