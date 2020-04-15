import { combineReducers } from 'redux';
import activeTodosReducer from './activeTodosReducer';
import archiveTodosReducer from './archiveTodosReducer';

const rootReducer = combineReducers({
  activeTodos: activeTodosReducer,
  archiveTodos: archiveTodosReducer,
});

export default rootReducer;
