import './App.css';
import { useEffect, useState, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getTodos, postTodo } from './actions';

function App() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();

  useEffect(() => dispatch(getTodos()), []);

  const todoList = useSelector(state => state.todoList);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postTodo(title, description));
    setTitle('');
    setDescription('');
  }

  return (
    <Fragment>
      <div style={{marginTop: '1rem'}} className="ui container">
        <form className="ui form" onSubmit={handleSubmit}>
          <div className="field">
            <label>Title</label>
            <input type="text" value={title} placeholder="Title" onChange={e => setTitle(e.target.value)}/>
          </div>
          <div className="field">
            <label>Description</label>
            <input type="text" value={description} placeholder="description" onChange={e => setDescription(e.target.value)} />
          </div>
          <button className="ui button" type="submit">Submit</button>
        </form>
        <div className="ui relaxed divided list">
          {
            todoList.map(todo => {
              return (
                <div className="item" key={todo.id}>
                  <i className="large tasks middle aligned icon"></i>
                  <div className="content">
                    <div className="header">{todo.title}</div>
                    <div className="description">{todo.description}</div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </Fragment>
  );
}

export default App;
