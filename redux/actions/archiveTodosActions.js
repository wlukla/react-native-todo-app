export const pushTodoToArchive = (todo) => ({
  type: 'PUSH_TODO_TO_ARCHIVE',
  payload: todo,
});

export const removeTodoFromArchive = (todo) => ({
  type: 'REMOVE_TODO_FROM_ARCHIVE',
  payload: todo,
});

export const putTodoInArchive = (todo) => ({
  type: 'PUT_TODO_IN_ARCHIVE',
  payload: todo,
});

export const putArchiveTodoList = (todoList) => ({
  type: 'PUT_ARCHIVE_TODO_LIST',
  payload: todoList,
});
