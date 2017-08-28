import React from 'react';
import ReactDom from 'react-dom';
import App from './component/app';


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

ReactDom.render(<AppContainer />, document.getElementById('root'));
