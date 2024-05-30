import { NavLink } from "react-router-dom";
import './styles/NavBar.css'

const NavBar = () => {
  return (
    <div>
      <nav>
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
            Add A Record
        </NavLink>
      </nav>
    </div>
  )
}

export default NavBar
