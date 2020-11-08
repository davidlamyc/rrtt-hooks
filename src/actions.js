import axios from 'axios';

export const getTodos = () => async (dispatch) => {
  const { data } = await axios.get('http://localhost:5000/todos');

  dispatch({
    type: 'GET_TODOS',
    payload: data
  })
}

export const postTodo = (title, description) => async (dispatch) => {
  const { data } = await axios.post('http://localhost:5000/todos', {
    title,
    description
  });

  dispatch({
    type: 'POST_TODO',
    payload: data
  })
}

