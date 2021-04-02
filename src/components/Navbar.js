import React from 'react'
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
             <nav>

                <NavLink className="navbar-item"
                    activeClassName="is-active"
                    to="/"
                > Home </NavLink>

                <NavLink className="navbar-item"
                    activeClassName="is-active"
                    to="/works"
                > Works  </NavLink>

                <NavLink className="navbar-item"
                    activeClassName="is-active"
                    to="/about"
                > About  </NavLink>

                <NavLink className="navbar-item"
                    activeClassName="is-active"
                    to="/contact"
                > Contact  </NavLink>

            </nav>
        </div>
    )
}

export default Navbar
