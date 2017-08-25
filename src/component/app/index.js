import React from 'react';
import ReactDOM from 'react-dom';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


console.log('HIT APP');

class App extends React.Component{
  constructor(props){
  super(props)

  this.handleSubmit= this.handleSubmit.bind(this)
  this.handleChange=this.handleChange.bind(this0)
}

handleChange(e) {this.setState({ [e.target.name]: e.target.value})}

handleSubmit(e) {
  e.preventDefault()
  this.props.handleSubmit(this.state)
}

  render() {
    return (
      <div className='app'>
      <form onSubmit={this.handleSubmit}>
      <input='number'
      type='number'
      value{this.state.value}
      onChange={this.handleChange}
      />

      <button type='submit'
      className='dot-form-button'></button>
        <p> HIT APP </p>
        </form>
      </div>
    )
  }
}

export default App
