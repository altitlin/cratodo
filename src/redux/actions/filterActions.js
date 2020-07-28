import { CHANGE_FILTER } from '../constants'

export const changeActiveFilter = nameFilter => ({
  type: CHANGE_FILTER,
  payload: nameFilter,
})
