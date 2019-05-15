/* eslint-disable import/prefer-default-export */
import { combineReducers } from 'redux';
import * as actions from './actions';

// ici il ya notre state todos et filter
export const todos = (state = [], action) => {

  switch (action.type) {
    case actions.ADD_TODO: {
      return [...state, action.todo];
    }

    case actions.DELETE_TODO: {
      return state.filter((value, index) => index !== action.index);
    }

    case actions.TOGGLE_TODO: {
      return state.map((value, index) => {
        if (index === action.index) {
          value.done = !value.done;
        }
        return value;
      });
    }

    default:
      return state;
  }
};

export const filter = (state = actions.visibilityFilters.SHOW_ALL, action) => {

  switch (action.type) {
    case actions.SET_FILTER: {
      return action.filter;

    }
    default:
      return state;
  }
};
