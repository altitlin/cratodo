import React from 'react'
import PropTypes from 'prop-types'

const TodoItem = ({ id, title, done, removeTask, doTodo }) => {
  return (
    <li className='collection-item'>
      <span className={done ? 'done' : ''}>{title}</span>
      <i className='material-icons' onClick={() => doTodo(id)}>check</i>
      <i className='material-icons' onClick={() => removeTask(id)}>close</i>
    </li>
  )
}

TodoItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  removeTask: PropTypes.func.isRequired,
  doTodo: PropTypes.func.isRequired,
}

export default TodoItem
