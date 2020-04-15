import Todo from '../../models/Todo';

const initialState = {
  todosList: [],
};

const activeTodosReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case 'PUSH_TODO_TO_ACTIVE':
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
    case 'PUT_TODO_IN_ACTIVE':
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

export default activeTodosReducer;
