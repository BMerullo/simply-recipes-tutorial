import React from "react"
import { Link } from "gatsby"

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">home page</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/contact">contact</Link>
        </li>
        <li>
          <Link to="/tags">tags</Link>
        </li>
        <li>
          <Link to="/recipes">recipes</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
