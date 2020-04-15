import Todo from '../../models/Todo';

const initialState = {
  todosList: [],
};

const archiveTodosReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PUSH_TODO_TO_ARCHIVE':
      return {
        ...state,
        todosList: [new Todo(action.payload), ...state.todosList],
      };
    case 'REMOVE_TODO_FROM_ACTIVE':
      return {
        ...state,
        todosList: state.todosList.filter(
          (todo) => todo.id !== action.payload.id,
        ),
      };
    default:
      return state;
  }
};

export default archiveTodosReducer;
