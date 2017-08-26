import React from 'react';
import uuid from 'uuid/v1';

class ButtonForm extends React.Component {
  constructor(props){
    super(props);

    let id = props.button ? props.button.id : uuid();
    let points = props.button ? props.note.points : '';
    let show = props.button ? props.button.show : false;
    let disappear = props.button ? props.button.disappear : false;
    this.state = {id, points, show, disappear};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {this.setState({ [e.tartget.name]: e.target.value});}
  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit(this.state);
  }

  render() {
    return(
      <div className='button-form'>
      <form onSubmit={this.handleSubmit}>
      <inpur
      name:'points'
    )
  }
}
