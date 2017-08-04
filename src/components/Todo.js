import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({handleClick, status, text}) => (
  <li
    onClick={handleClick}
    style={{
      textDecoration: 0 !== status ? 'line-through' : 'none'
    }}
  >
    {text}
    <span className="remove">Remove</span>
  </li>
)

Todo.PropTypes = {
  handleClick: PropTypes.func.isRequired,
  status: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo