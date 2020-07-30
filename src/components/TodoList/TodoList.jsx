import React from 'react'
import PropTypes from 'prop-types'

import TodoItem from '../TodoItem/TodoItem'

const TodoList = ({ todos, removeTask, doTodo }) => {
  return (
    <ul className='collection'>
      {todos.map(todo => <TodoItem
          key={todo.id}
          {...todo}
          removeTask={removeTask}
          doTodo={doTodo}
        />
      )}
    </ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    done: PropTypes.bool,
  })).isRequired,
  removeTask: PropTypes.func.isRequired,
  doTodo: PropTypes.func.isRequired,
}

export default TodoList
