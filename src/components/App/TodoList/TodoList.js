/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-fallthrough */
import React from 'react';
import { connect } from 'react-redux';
import TodoItem from '../TodoItem/TodoItem';
import { visibilityFilters,toggleTodo, deleteTodo } from '../../../store/actions';

const TodoList = ({ todos , deleteTodo, toggleTodo }) => (

  <ul className="list-group">
    {todos && todos.map((value,index) => (
      <TodoItem
        key={value.name}
        todo={value}
        deleteTodo={() => deleteTodo(index)}
        toggleTodo={() => toggleTodo(index)}
      />
    ))}

  </ul>
);

export default connect((state) => {
  const filter = state.filter;
  let todos;
  switch (filter) {
    case visibilityFilters.SHOW_DONE: {
      todos = state.todos.filter(value => value.done);
      break;
    }
    case visibilityFilters.SHOW_ACTIVE: {
      todos = state.todos.filter(value => !value.done);
      break;
    }
    default: {
      todos = state.todos;
      break;
    }
  }
  return { todos };
}, {
  toggleTodo,
  deleteTodo,
})(TodoList);
