import React from 'react';
import ReactDOM from 'react-dom';
import Slider from '../slider';
import SliderTwo from '../slider-two';
import Button from '../button';
// import '../style/main.scss';
import '../button/_button.scss';
import ButtonCounter from '../button-counter';
import ButtonCounter2 from '../button-counter2';


console.log('HIT APP');

class App extends React.Component{
  render(){
    return (

      <div className='app'>
        <div className='button-counter'></div>
        <Slider />
        <ButtonCounter />
        <ButtonCounter2 />
      </div>

    );
  }
}

export default App;
