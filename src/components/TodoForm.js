import React, { useState } from 'react'

const TodoForm = ({ addTodo, todos, setTodos }) => {

  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    if (value === "") {
      alert("Nothing to add")
    }
    else{
      //e.preventDefault();
      addTodo(value);
      setValue("");
    }
  }

  const clickHandler = () => {
    if (todos.length === 0) {
      alert("There is nothing to delete");
    }
    else {
      const confirmation = window.confirm("Are you sure?")
      if(confirmation){
        setTodos([]);
      }
    }
  }

  const completeHandler = () => {
    if (todos.length === 0) {
      alert("There is nothing to complete");
    }
    else{
      setTodos(todos.map((todo) => ({...todo, completed: !todo.completed})))
    }
  }

  return (
    <>
      <div className='TodoForm' >
        <input type='text' className='todo-input' placeholder='Add your task here'
          onChange={(e) => { setValue(e.target.value) }} value={value} />
        <button type='submit' className='todo-btn' onClick={handleSubmit}>Add Task</button>
        <button className='todo-btn' onClick={clickHandler}>Delete All</button>
        <button className='todo-btn' onClick={completeHandler} >Complete All</button>
      </div>
    </>
  )
}

export default TodoForm