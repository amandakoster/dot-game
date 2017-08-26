// import React from 'react';
// import ReactDOM from 'react-dom';
//
// class SliderTwo extends React.Component {
// constructor(props){
//     super(props);
//     this.state = {
//         minValue: 0,
//         maxValue: 100,
//         firstValue: null,
//         secondValue: null,
//     };
// }
//
// componentWillMount(){
//     this.setState({firstValue: this.state.minValue, secondValue: this.state.maxValue});
// }
//
// handleChange(name, event){
//     let value = event.target.value;
//     if(name === "second"){
//     		if(parseInt(this.state.firstValue) <parseInt(value)){
//             this.setState({secondValue:value});
//         }
//     }
// }
//
// render(){
//     return (
//         <div>
//             <div className="rangeValues">Value :  {this.state.secondValue}</div>
//                 <input type="range" value={this.state.secondValue} min={this.state.minValue} max={this.state.maxValue} step={this.state.step} onChange={this.handleChange.bind(this, "second")}/>
//         </div>
//     );
// }
// }
//
// ReactDOM.render(
//   <SliderTwo language="World" />,
//   document.getElementById('container')
// );
