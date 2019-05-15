/* eslint-disable react/button-has-type */
import React from 'react';
import { deleteTodo } from '../../../store/actions';

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => (
  // eslint-disable-next-line max-len
  <li onClick={toggleTodo} className="list-group-item d-flex flex-row justify-content-between align-items-center list-group-item-action">
    <span> {todo.name} </span>
    <span>
      <input className="mx-3" checked={todo.done} onChange={() => {}} type="checkbox" />
      <button
        onClick={(e) => {
          e.preventDefault();
          deleteTodo();
        }}
        className="btn btn-sm btn-danger"
      >delete
      </button>
    </span>
  </li>
);

export default TodoItem;
