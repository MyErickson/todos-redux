import { createStore } from 'redux';
import { combineReducers } from 'redux';
import * as reducers from './reducers';

const todosReducer = combineReducers(reducers);
const store = createStore(todosReducer);

export default store;
