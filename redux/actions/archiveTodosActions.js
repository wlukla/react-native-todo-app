export const addTodoToArchive = (todo) => ({
  type: 'ADD_TODO_TO_ARCHIVE',
  payload: todo,
});

export const deleteTodoFromArchive = (todo) => ({
  type: 'DELETE_TODO_FROM_ARCHIVE',
  payload: todo,
});
