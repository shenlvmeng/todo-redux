import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

const getFilteredTodos = (todos, filter) => {
  switch(filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_DONE':
      return todos.filter(todo => todo.status === 1)
    case 'SHOW_ACTIVE':
      return todos.filter(todo => todo.status === 0)
    case 'SHOW_REMOVED':
      return todos.filter(todo => todo.status === 2)
    default:
      return todos
  }
}

const mapStateToProps = state => {
  return {
    todos: getFilteredTodos(state.todos, state.filter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleTodoClick: (e, id) => {
      e.stopPropagation()
      if (e.target.className === 'remove') {
        dispatch(toggleTodo(id, 2))
      } else {
        dispatch(toggleTodo(id))
      }
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
