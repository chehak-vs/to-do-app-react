import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons'

export const Todo = ({task, deleteTodo, editTodo, toggleTodo}) => {
  return (
    <>
    
    <div className='Todo'>
      <p className={`${task.completed ? "completed" : "incompleted"}`} >{task.task}</p>
      <div>
        <FontAwesomeIcon icon={faSquareCheck}  onClick={() => toggleTodo(task.id)} />
        <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)} />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)}/>
      </div>
    </div>
    </>
  )
}
