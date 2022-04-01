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
      </ul>
    </nav>
  )
}

export default NavBar
