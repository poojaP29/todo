import React, { useState } from 'react';
import Form from './form';
import Todo from './todo';
function List() {
  const [todos, setTodos] = useState([]);
  const [count,setCount] =useState(0)

  //adding todo
  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

//updating todo
  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  console.log(todos)

//removing todo
  const removeTodo = id => {
  alert("Press ok to continue")
    const removedArr = [...todos].filter(todo => todo.id !== id);
    setTodos(removedArr);
  };


  //complete todo
  const completeTodo = (id)=> {
    alert("Are you done then Press Ok to continue");
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
        count=setCount(count+1);
      }
      return todo;
    });
    setTodos(updatedTodos);
    
  };

  return (
    <>
      <h1>What's the Plan for Today?</h1>
     <h1> Plan Done :{count} </h1>
      <Form onSubmit={addTodo} />
      
      <Todo
        
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
        />
        
    </>
  );
}

export default List;