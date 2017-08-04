import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ active, children, handleClick }) => {
  if (active) {
    return <span>{children}</span>
  }

  return ( // eslint-disable-next-line
    <a
      href="#"
      onClick={e => {
        e.preventDefault()
        handleClick()
      }}
    >
      {children}
    </a>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default Link