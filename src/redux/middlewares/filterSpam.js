import { showToast } from '../actions/todoActions'
import { ADD_TODO } from '../constants'

import messages from '../../messages'

const wordsSpam = ['fuck', 'spam', 'php', 'pascal', 'basic', '18+', 'xxx']

const filterSpam = ({ dispatch }) => next => action => {
  if (action.type === ADD_TODO) {
    const found = wordsSpam.filter(word => action.payload.title.toLowerCase().includes(word))

    if (found.length) {
      return dispatch(showToast(messages.spam))
    }
  }

  return next(action)
}

export default filterSpam
