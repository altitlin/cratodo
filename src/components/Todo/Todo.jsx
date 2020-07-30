import React from 'react'
import PropTypes from 'prop-types'

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

Todo.propTypes = {
  value: PropTypes.string.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    done: PropTypes.bool,
  })).isRequired,
  countActiveTasks: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  onKeyPress: PropTypes.func.isRequired,
  onClickBtn: PropTypes.func.isRequired,
  removeTask: PropTypes.func.isRequired,
  doTodo: PropTypes.func.isRequired,
}

export default Todo
