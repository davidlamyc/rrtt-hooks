import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  todoList: []
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_TODOS':
      return {
        ...state,
        todoList: action.payload
      };
    case 'POST_TODO':
      return {
        ...state,
        todoList: [...state.todoList, action.payload]
      };
    default:
      return state;
  }
}

export default createStore(rootReducer, applyMiddleware(thunk));