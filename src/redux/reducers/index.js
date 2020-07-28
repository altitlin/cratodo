import { combineReducers } from 'redux'

import todoReducer from './todo'
import filterReducer from './filter'

const rootReducer = combineReducers({
  todo: todoReducer,
  filter: filterReducer,
})

export default rootReducer
