export const pushTodoToActive = (todo) => ({
  type: 'PUSH_TODO_TO_ACTIVE',
  payload: todo,
});

export const removeTodoFromActive = (todo) => ({
  type: 'REMOVE_TODO_FROM_ACTIVE',
  payload: todo,
});

export const putTodoInActive = (todo) => ({
  type: 'PUT_TODO_IN_ACTIVE',
  payload: todo,
});

export const putActiveTodoList = (todoList) => ({
  type: 'PUT_ACTIVE_TODO_LIST',
  payload: todoList,
});
