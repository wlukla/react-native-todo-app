import {
  removeTodoFromActive,
  pushTodoToActive,
  putTodoInActive,
  putActiveTodoList,
} from './activeTodosActions';
import {
  removeTodoFromArchive,
  pushTodoToArchive,
  putTodoInArchive,
  putArchiveTodoList,
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

export const updateTodoInActive = (todo) => (dispatch) => {
  dispatch(putTodoInActive(todo));
};

export const updateTodoInArchive = (todo) => (dispatch) => {
  dispatch(putTodoInArchive(todo));
};

export const updateActiveTodoList = (todo) => (dispatch) => {
  dispatch(putActiveTodoList(todo));
};

export const updateArchiveTodoList = (todo) => (dispatch) => {
  dispatch(putArchiveTodoList(todo));
};
