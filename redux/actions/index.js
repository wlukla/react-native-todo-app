import { removeTodoFromActive, pushTodoToActive } from './activeTodosActions';
import {
  removeTodoFromArchive,
  pushTodoToArchive,
} from './archiveTodosActions';

export const deleteTodoFromActive = (todo) => (dispatch) => {
  dispatch(removeTodoFromActive(todo));
  dispatch(pushTodoToArchive(todo));
};

export const addTodoToActive = (title) => (dispatch) => {
  dispatch(pushTodoToActive(title));
};

export const deleteTodoFromArchive = (todo) => (dispatch) => {
  dispatch(removeTodoFromArchive(todo));
};
