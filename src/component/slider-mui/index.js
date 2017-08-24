import React from 'react';
import ReactDOM from 'react-dom';
import Slider from 'material-ui/Slider';

class SliderMui extends React.Component{
render(){
  return(

      <div className='slider'>
        <MuiThemeProvider>
        <Slider />
        <Slider defaultValue={0.5} />
        <Slider defaultValue={1} />
      </MuiThemeProvider>
      </div>

      )
      }
  }

export default SliderMui;
