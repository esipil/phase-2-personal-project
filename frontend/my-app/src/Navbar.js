import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <nav>
        <h1>Bookers</h1>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/book">Book</Link>
    </nav>
  )
}

export default Navbar