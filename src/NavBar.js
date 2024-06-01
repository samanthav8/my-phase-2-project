import { NavLink } from "react-router-dom";
import './styles/NavBar.css'

const NavBar = () => {
  return (
    <div>
      <nav className="navbar">
        <NavLink
            to="/"
            className="nav-link"
        >
            Home
        </NavLink>
        <NavLink
            to="/records"
            className="nav-link"
        >
            My Records
        </NavLink>
        <NavLink
            to="/newrecordform"
            className="nav-link"
        >
            Add A New Record
        </NavLink>
      </nav>
    </div>
  )
}

export default NavBar
