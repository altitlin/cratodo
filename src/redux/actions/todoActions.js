import {
  ADD_TODO,
  REMOVE_TODO,
  DO_TODO,
  SET_TODOS,
  SET_TEXT_TOAST,
  TOGGLE_IS_LOADING,
  TOGGLE_IS_SHOW_TOAST,
} from '../constants'

import { delay } from '../../helpers'

const TODOS = [
  { id: '1', title: 'Task One', done: false },
  { id: '2', title: 'Task Two', done: false },
  { id: '3', title: 'Task Three', done: true },
  { id: '4', title: 'Task Four', done: false },
]

const setTodos = todos => ({
  type: SET_TODOS,
  payload: todos,
})

const setTextToast = text => ({
  type: SET_TEXT_TOAST,
  payload: text,
})

const toggleIsLoading = isLoading => ({
  type: TOGGLE_IS_LOADING,
  payload: isLoading,
})

const toggleIsShowToast = isShowToast => ({
  type: TOGGLE_IS_SHOW_TOAST,
  payload: isShowToast,
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
    await delay(2500)
    dispatch(setTodos(TODOS))
    dispatch(toggleIsLoading(false))
  } catch (error) {

  }
}

export const showToast = text => async dispatch => {
  try {
    dispatch(setTextToast(text))
    dispatch(toggleIsShowToast(true))
    await delay(3000)
    dispatch(toggleIsShowToast(false))
  } catch (error) {

  }
}
