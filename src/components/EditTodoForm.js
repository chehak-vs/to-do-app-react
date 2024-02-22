import React, { useState } from 'react'

const EditTodoForm = ({ editTodo, task }) => {

  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
  }


  return (
    <div className='TodoForm' >
      <input type='text' className='todo-input' placeholder='Update Task'
        onChange={(e) => { setValue(e.target.value) }} value={value} />
      <button type='submit' className='todo-btn' id='update-btn' onClick={handleSubmit}>Update Task</button>
    </div>
  )
}

export default EditTodoForm