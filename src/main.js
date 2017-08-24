import React from 'react';
import ReactDom from 'react-dom';
import Slider from 'material-ui/Slider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import App from './component/app'

class AppContainer extends React.Component {

  render() {
    return(
      <div>
      <MuiThemeProvider>

      <Slider />
      </MuiThemeProvider>
      </div>
    );
  }
}

ReactDom.render(<AppContainer />, document.getElementById('root'))
