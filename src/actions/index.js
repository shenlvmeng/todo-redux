import { createActionCreator } from './util'
import { ADD_TODO, SET_FILTER, TOGGLE_TODO } from './actions'

let nextTodoId = 0

export const addTodo = text => {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    text
  }
}

export const setFilter = createActionCreator(SET_FILTER, 'filter')
export const toggleTodo = createActionCreator(TOGGLE_TODO, 'id', 'to')