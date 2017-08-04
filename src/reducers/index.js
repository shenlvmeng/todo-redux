import todos from './todos'
import filter from './filter'
import { combineReducers } from 'redux'

const todoApp = combineReducers({
  todos,
  filter
})

export default todoApp