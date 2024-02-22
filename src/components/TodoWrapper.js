import React, { useEffect, useState } from 'react'
import TodoForm from './TodoForm'
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './Todo';
import EditTodoForm from './EditTodoForm';
uuidv4();

export const TodoWrapper = () => {

  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditting: false }]);
    console.log(todos);
  }

  const deleteTodo = (id) => {
    let confirmation = window.confirm("Do you really want to delete?")
    if(confirmation){
      setTodos(todos.filter(todo => todo.id !== id))
    }
  }

  const editTodo = (id) => {
    setTodos(todos.map((todo) => todo.id === id ?{...todo, isEditting: !todo.isEditting} : todo))
  }

  const editTask = (task, id) => {
    for(let todo of todos){
      if(todo.id === id){
        if(todo.task === task){
          alert("Nothing to update")
        }
        else{
          if(task === ""){
            alert("Can not be empty")
          }
          else{
            const finalTask = `${task} (edited)`;
            setTodos(todos.map((todo) => todo.id === id ? {...todo, task:finalTask, isEditting: !todo.isEditting} : todo))
          }
        }
      }
    }
  }

  const toggleTodo = (id) => {
    setTodos(todos.map((todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo))
  }

  return (
    <div className='TodoWrapper'> 
      <h1>Plan Your Day</h1>
      <TodoForm addTodo={addTodo} todos={todos} setTodos={setTodos} />

      {todos.map((todo) => 
        todo.isEditting ? 
        (<EditTodoForm editTodo={editTask} task={todo} />) :
        (<Todo task={todo} key={todo.id} deleteTodo={deleteTodo} editTodo={editTodo} toggleTodo={toggleTodo} />)
      )}
      

    </div>
  )
}