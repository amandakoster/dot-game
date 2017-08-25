import React from 'react';
import ReactDom from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import App from './component/app'

class AppContainer extends React.Component {

  render() {
    return(
      <div>
      <MuiThemeProvider>
      <App />
      </MuiThemeProvider>
      </div>
    );
  }
}

ReactDom.render(<AppContainer />, document.getElementById('root'))
