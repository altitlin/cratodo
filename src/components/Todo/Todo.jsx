import React from 'react'

import TodoInput from './TodoInput/TodoInput'
import TodoList from './TodoList/TodoList'
import TodoFooter from './TodoFooter/TodoFooter'

import { AppContext } from '../../context'

const Todo = () => {
  return (
    <AppContext.Consumer>
      {
        ({
          value,
          onChange,
          onKeyPress,
          countDoneTasks,
          onClickBtn,
          todos,
          removeTask,
          doTask
        }) => (
          <div className='todo'>
            <TodoInput value={value} onChange={onChange} onKeyPress={onKeyPress} />
            {todos.length !== 0 && <TodoList todos={todos} removeTask={removeTask} doTask={doTask} />}
            {todos.length !== 0 && <TodoFooter countDoneTasks={countDoneTasks} onClickBtn={onClickBtn} />}
          </div>
        )
      }
    </AppContext.Consumer>
  )
}

export default Todo
