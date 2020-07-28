import React from 'react'

import TodoInput from './TodoInput/TodoInput'
import TodoList from './TodoList/TodoList'
import TodoFooter from './TodoFooter/TodoFooter'

export default function({ todos, onChange, onKeyPress, onClickBtn, removeTask, doTask, value, countDoneTasks }) {
  return (
    <div className='todo'>
      <TodoInput onChange={onChange} onKeyPress={onKeyPress} value={value} />
      <TodoList todos={todos} removeTask={removeTask} doTask={doTask} />
      <TodoFooter countDoneTasks={countDoneTasks} onClickBtn={onClickBtn} />
    </div>
  )
}
