export const addTodoToActive = (todo) => ({
  type: 'ADD_TODO_TO_ACTIVE',
  payload: todo,
});

export const deleteTodoFromActive = (todo) => ({
  type: 'DELETE_TODO_FROM_ACTIVE',
  payload: todo,
});
