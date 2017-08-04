import React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
  <p>
    Show: {' '}
    <FilterLink filter="SHOW_ALL">ALL</FilterLink>
    {', '}
    <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>
    {', '}
    <FilterLink filter="SHOW_DONE">Done</FilterLink>
    {', '}
    <FilterLink filter="SHOW_REMOVED">Removed</FilterLink>
  </p>
)

export default Footer