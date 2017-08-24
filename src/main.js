import React from 'react';
import ReactDom from 'react-dom';

import Slider from '../'

class AppContainer extends React.Component {
  render() {
    return(
      <div>
      <h1> hello </h1>
      </div>
    );
  }
}

ReactDom.render(<AppContainer />, document.getElementById('root'))
