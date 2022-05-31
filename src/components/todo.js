import React, { useState } from 'react';
import Form from './form';

const Todo = ({ todos,completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });
  
 const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
    
  };
  
  if (edit.id) {
    return <Form edit={edit} onSubmit={submitUpdate} />;
  }

  
  return todos.map((todo) => (
    <>
    
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}> 
        {!todo.isComplete && <input  className="check" type="checkbox"  onClick={() => completeTodo(todo.id)} ></input>}
      <div key={todo.id} contentEditable = {true }>
        {todo.text}
      </div>
      <div className='icons'>
        {!todo.isComplete && <><button
          onClick={() => removeTodo(todo.id)}
          className='delete-icon'>Delete</button>
        
        <button 
          onClick={() => setEdit({id: todo.id, value: todo.text })}
          className='edit-icon'>Edit</button></>}
      </div>

    </div>
    </>
  ));
};

export default Todo;
