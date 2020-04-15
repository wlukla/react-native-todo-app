import Todo from '../../models/Todo';

const initialState = {
  todosList: [],
};

const activeTodosReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO_TO_ACTIVE':
      console.log(action.payload);
      return {
        ...state,
        todosList: state.todosList.concat(new Todo(action.payload)),
      };
    case 'DELETE_TODO_FROM_ACTIVE':
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

export default activeTodosReducer;
