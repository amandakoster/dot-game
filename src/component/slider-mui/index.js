import './_slider.scss'
import React from 'react';
import ReactDOM from 'react-dom';
import Slider from 'material-ui/Slider';

// handleChange = (slider, value) => {
//   const newState = {};
//   newState[slider] = value;
//   this.setState(newState);
// };

class SliderMui extends React.Component{
render(){
  return(

      <div >
        <MuiThemeProvider>
        <Slider

        defaultValue={0.5}
        />
      </MuiThemeProvider>
      </div>

      )
      }
  }

export default SliderMui;
