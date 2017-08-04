import { ADD_TODO, TOGGLE_TODO } from '../actions/actions'

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return  [
        ...state,
        {
          id: action.id,
          text: action.text,
          status: 0
        }
      ]
    case TOGGLE_TODO:
      return state.map(todo => 
        (todo.id === action.id) ? {...todo, status: action.to || +!todo.status} : todo
      )
    default:
      return state
  }
}

export default todos