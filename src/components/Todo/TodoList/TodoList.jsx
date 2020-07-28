import React from 'react'

import TodoItem from '../TodoItem/TodoItem'

export default function({ todos, removeTask, doTask }) {
  return (
    <ul className='collection'>
      {todos.map(todo => <TodoItem key={todo.id} {...todo} removeTask={removeTask} doTask={doTask} />)}
    </ul>
  )
}
