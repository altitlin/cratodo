import {
  ADD_TODO,
  REMOVE_TODO,
  DO_TODO,
  SET_TODOS,
  TOGGLE_IS_LOADING,
} from '../constants'

const initialState = {
  todos: [],
  isLoading: false,
}

const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_TODOS:
      return {
        ...state,
        todos: payload,
      }

    case TOGGLE_IS_LOADING:
      return {
        ...state,
        isLoading: payload,
      }

    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, payload],
      }

    case REMOVE_TODO:
      return {
        ...state,
        todos: [...state.todos].filter(({ id }) => id !== payload),
      }

    case DO_TODO:
      return {
        ...state,
        todos: [...state.todos].map(todo =>
          todo.id === payload
            ? { ...todo, done: true }
            : todo
        )
      }

    default:
      return state;
  }
}

export default todoReducer
