import React from 'react'

const Navbar = props => {
    const {moves} = props || 0
    return (
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand">
                <img src="grue-grey.png" width="40px" />
            </a>
            <span className="navbar-text">moves: {moves} </span>
        </nav>
    )
}

export default Navbar
