import { CHANGE_FILTER } from '../constants'

const initialState = {
  activeFilter: 'ALL',
}

const filterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_FILTER:
      return {
        ...state,
        activeFilter: payload,
      }

    default:
      return state
  }
}

export default filterReducer
