const thunk = ({ dispatch, getState }) => next => {
  return action => {
    typeof action === 'function'
      ? action(dispatch, getState)
      : next(action)
  }
}

export default thunk
