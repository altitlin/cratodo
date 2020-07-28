import React from 'react'

import TodoItem from '../TodoItem/TodoItem'

const TodoList = ({ todos, removeTask, doTodo }) => {
  return (
    <ul className='collection'>
      {todos.map(todo => <TodoItem key={todo.id} {...todo} removeTask={removeTask} doTodo={doTodo} />)}
    </ul>
  )
}

export default TodoList
