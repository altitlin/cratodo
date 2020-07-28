import React from 'react'

import TodoInput from './TodoInput/TodoInput'
import TodoList from './TodoList/TodoList'
import TodoFooter from './TodoFooter/TodoFooter'
import Loader from '../Loader/Loader'

import { AppContext } from '../../context'

export default function() {
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
          isLoader,
          removeTask,
          doTask
        }) => (
          <div className='todo'>
            <TodoInput value={value} onChange={onChange} onKeyPress={onKeyPress} />
            {isLoader && <Loader />}
            {todos.length !== 0 && <TodoList todos={todos} removeTask={removeTask} doTask={doTask} />}
            {todos.length !== 0 && <TodoFooter countDoneTasks={countDoneTasks} onClickBtn={onClickBtn} />}
          </div>
        )
      }
    </AppContext.Consumer>
  )
}
