export const pushTodoToArchive = (todo) => ({
  type: 'PUSH_TODO_TO_ARCHIVE',
  payload: todo,
});

export const removeTodoFromArchive = (todo) => ({
  type: 'REMOVE_TODO_FROM_ARCHIVE',
  payload: todo,
});
