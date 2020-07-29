import { showToast } from '../actions/todoActions'
import { ADD_TODO } from '../constants'

import messages from '../../messages'
import { isValid } from '../../helpers'

const valid = ({ dispatch }) => next => action => {
  if (action.type === ADD_TODO) {
    const { title } = action.payload

    if (!isValid(title)) {
      return dispatch(showToast(messages.errorAdd))
    }
  }

  return next(action)
}

export default valid
