import React from 'react'

import TodoInput from '../TodoInput/TodoInput'
import TodoList from '../TodoList/TodoList'
import TodoFooter from '../TodoFooter/TodoFooter'

const Todo = ({
  value,
  todos,
  countActiveTasks,
  onChange,
  onKeyPress,
  onClickBtn,
  removeTask,
  doTodo,
}) => {
  return (
    <div className='todo'>
      <TodoInput value={value} onChange={onChange} onKeyPress={onKeyPress} />
      {todos && todos.length !== 0 && <TodoList todos={todos} removeTask={removeTask} doTodo={doTodo} />}
      {todos && todos.length !== 0 && <TodoFooter countActiveTasks={countActiveTasks} onClickBtn={onClickBtn} />}
    </div>
  )
}

export default Todo
