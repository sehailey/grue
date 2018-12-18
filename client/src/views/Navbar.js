import React from 'react'

const Navbar = props => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a href="grue.herokuapp.com" className="navbar-brand">
        <img src="grue-grey.png" alt="grue" width="40px" />
      </a>
      <span className="navbar-text">
        moves: {props.moves} | score: {props.score}
      </span>
    </nav>
  )
}

export default Navbar
