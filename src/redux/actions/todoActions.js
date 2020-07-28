import {
  ADD_TODO,
  REMOVE_TODO,
  DO_TODO,
  SET_TODOS,
  TOGGLE_IS_LOADING,
} from '../constants'

import { delay } from '../../helpers'

const TODOS = [
  { id: '1', title: 'Task One', done: false },
  { id: '2', title: 'Task Two', done: false },
  { id: '3', title: 'Task Three', done: true },
  { id: '4', title: 'Task Four', done: false },
]

const DELAY = 2500

const setTodos = todos => ({
  type: SET_TODOS,
  payload: todos,
})

const toggleIsLoading = isLoading => ({
  type: TOGGLE_IS_LOADING,
  payload: isLoading,
})

export const addTodo = newTodo => ({
  type: ADD_TODO,
  payload: newTodo,
})

export const removeTodo = id => ({
  type: REMOVE_TODO,
  payload: id,
})

export const doTodo = id => ({
  type: DO_TODO,
  payload: id,
})

export const requestTodo = () => async dispatch => {
  try {
    dispatch(toggleIsLoading(true))
    await delay(DELAY)
    dispatch(setTodos(TODOS))
    dispatch(toggleIsLoading(false))
  } catch (error) {

  }
}
