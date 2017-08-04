import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({todos, handleTodoClick}) => (
  <ul>
    {todos.map(todo => (
      <Todo 
        key={todo.id} 
        {...todo} 
        handleClick = {(e) => handleTodoClick(e, todo.id)}
      />
    ))}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequried,
      status: PropTypes.number.isRequried,
      text: PropTypes.string.isRequried
    }).isRequried
  ).isRequried,
  handleTodoClick:PropTypes.func.isRequried
}

export default TodoList