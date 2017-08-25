import React from 'react';
import ReactDOM from 'react-dom';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


const CalculatorOperations = {
  '+': (prevValue, nextValue) => prevValue + nextValue,
  '=': (prevValue, nextValue) => nextValue
}


class DotCalculator extends React.Component {
  state = {
    value: null,
    displayValue: '0',
    operator: null,
    waitingForOperand: false
  };

  clearAll() {
    this.setState({
      value: null,
      displayValue: '0',
      operator: null,
      waitingForOperand: false
    })
  }

  clearDisplay() {
    this.setState({
      displayValue: '0'
    })
  }

  render() {
    const { displayValue } = this.state

    const clearDisplay = displayValue !== '0'


    <div className="digit-keys">
      <CalculatorKey className="key-0" onPress={() => this.inputDigit(0)}>0</CalculatorKey>
      <CalculatorKey className="key-dot" onPress={() => this.inputDot()}>●</CalculatorKey>
      <CalculatorKey className="key-1" onPress={() => this.inputDigit(1)}>1</CalculatorKey>
    </div>

    ReactDOM.render(
  <DotCalculator/>,
  document.getElementById('app')
)
