export const pushTodoToActive = (todo) => ({
  type: 'PUSH_TODO_TO_ACTIVE',
  payload: todo,
});

export const removeTodoFromActive = (todo) => ({
  type: 'REMOVE_TODO_FROM_ACTIVE',
  payload: todo,
});
