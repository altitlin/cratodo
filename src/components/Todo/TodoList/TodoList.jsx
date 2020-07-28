import React from 'react'

import TodoItem from '../TodoItem/TodoItem'

import { AppContext } from '../../../context'

export default function() {
  return (
    <AppContext.Consumer>
      {({ todos, removeTask, doTask }) => (
        <ul className='collection'>
          {todos.map(todo => <TodoItem key={todo.id} {...todo} removeTask={removeTask} doTask={doTask} />)}
        </ul>
      )}
    </AppContext.Consumer>
  )
}
