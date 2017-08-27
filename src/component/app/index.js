import React from 'react';
import ReactDOM from 'react-dom';
import Slider from '../slider';
import SliderTwo from '../slider-two';
import Button from '../button';
// import '../style/main.scss';
import '../button/_button.scss';
import ButtonCounter from '../button-counter';


console.log('HIT APP');

class App extends React.Component{
  render(){
    return (

      <div className='app'>
        <div className='button-counter'></div>
        <Slider />
        <Button />
        <ButtonCounter />
      </div>

    );
  }
}

export default App;
