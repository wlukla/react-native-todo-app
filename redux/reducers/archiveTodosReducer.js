const initialState = {
  todosList: [],
};

const archiveTodosReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PUSH_TODO_TO_ARCHIVE':
      return {
        ...state,
        todosList: [action.payload, ...state.todosList],
      };
    case 'REMOVE_TODO_FROM_ARCHIVE':
      return {
        ...state,
        todosList: state.todosList.filter(
          (todo) => todo.id !== action.payload.id,
        ),
      };
    case 'PUT_TODO_IN_ARCHIVE':
      return {
        ...state,
        todosList: state.todosList.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo,
        ),
      };
    default:
      return state;
  }
};

export default archiveTodosReducer;
