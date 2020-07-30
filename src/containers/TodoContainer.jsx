import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Alert from '../components/Alert/Alert'
import Todo from '../components/Todo/Todo'

import withLoading from '../hocs/withLoading'

import {
  addTodo,
  removeTodo,
  requestTodo,
  showToast,
  doTodo,
} from '../redux/actions/todoActions'
import { changeActiveFilter } from '../redux/actions/filterActions'

import { getId } from '../helpers'
import messages from '../messages'

const TodoWithLoading = withLoading(Todo)

const TodoContainer = () => {
  const [inputText, setInputText] = useState('')

  const dispatch = useDispatch()
  const {
    todos,
    isLoading,
    textToast,
    isShowToast,
    activeFilter,
  } = useSelector(state => ({ ...state.todo, ...state.filter }))

  useEffect(() => dispatch(requestTodo()), [dispatch])

  const filterTasks = (todos, activeFilter) => {
    switch (activeFilter) {
      case 'ACTIVE':
        return todos.filter(({ done }) => !done)

      case 'DONE':
        return todos.filter(({ done }) => done)

      default:
        return todos
    }
  }

  const inputChangeHandler = ({ target: { value } }) => setInputText(value)

  const addTask = ({ key }) => {
    const newTodo = {
      id: getId(todos.length),
      title: inputText,
      done: false,
    }

    if (key === 'Enter') {
      dispatch(addTodo(newTodo))

      setInputText('')
    }
  }

  const removeTask = id => {
    dispatch(removeTodo(id))
    dispatch(showToast(messages.successRemove))
  }

  const changeFilter = filter => dispatch(changeActiveFilter(filter))

  const completeTodo = id => dispatch(doTodo(id))

  const filteredTasks = filterTasks(todos, activeFilter)
  const countActiveTasks = filteredTasks.filter(({ done }) => !done).length

  return (
    <>
      <TodoWithLoading
        isLoading={isLoading}
        todos={filteredTasks}
        value={inputText}
        countActiveTasks={countActiveTasks}
        onChange={inputChangeHandler}
        onKeyPress={addTask}
        onClickBtn={changeFilter}
        removeTask={removeTask}
        doTodo={completeTodo}
      />
      <Alert text={textToast} showToast={isShowToast} />
    </>
  )
}

export default TodoContainer
