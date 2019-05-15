/* eslint-disable react/button-has-type */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../../store/actions';

class AddTodo extends Component {
  state= {
    input: React.createRef(),
  }

  submitTodo = () => {
    console.log(this.state.input.current.value);
    this.props.addTodo({
      name: this.state.input.current.value,
      done: false,
    });
    this.state.input.current.value = '';
  }

  render() {
    return (
      <div className="d-flex mb-4">
        <input ref={this.state.input} type="text" name="login" className="form-control mr-5" />
        <button onClick={this.submitTodo} className="btn btn-success"> Ajouter </button>
      </div>
    );
  }
}

export default connect(null, { addTodo })(AddTodo);
