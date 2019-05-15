/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Component } from 'react';

import Filter from './Filter/Filter';

import AddTodo from './AddTodo/AddTodo';

import TodoList from './TodoList/TodoList';


class App extends Component {
  render() {
    return (
      <div className="container p-5">
        <h4>Ajouter une todo</h4>
        <hr className="my-4" />
        <AddTodo />
        <hr className="my-4" />
        <div className="card">
          <div className="card-header d-flex flex-row align-items-center">
            <span className="flex-fill">Todo list</span>
            <Filter />
          </div>
          <div className="card-body">
            <TodoList />
          </div>
        </div>
      </div>
    );
  }
}


export default App;
