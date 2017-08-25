import React from 'react';
import ReactDOM from 'react-dom';
import Slider from '../slider';
import SliderTwo from '../slider-two';
import Button from '../button';
import '../dot/_dot.scss';



console.log('HIT APP');

class App extends React.Component{
  render(){
    return (

      <div className='app'>
        <Slider />

        <Button />
      </div>

    );
  }
}

export default App;
