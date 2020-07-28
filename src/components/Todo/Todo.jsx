import React from 'react'

import TodoInput from './TodoInput/TodoInput'
import TodoList from './TodoList/TodoList'
import TodoFooter from './TodoFooter/TodoFooter'

export default function() {
  return (
    <div className='todo'>
      <TodoInput />
      <TodoList />
      <TodoFooter />
    </div>
  )
}
