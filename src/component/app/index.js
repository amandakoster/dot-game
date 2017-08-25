import React from 'react';
import ReactDOM from 'react-dom';
import Slider from '../slider'
import '../dot/_dot.scss'



console.log('HIT APP');

class App extends React.Component{
  render(){
    return (

      <div className='app'>
      <Slider />
      <button>button</button>
      </div>

    )
  }
}


export default App
