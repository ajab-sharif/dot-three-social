import { NavLink } from "react-router-dom";

function MainNav() {
  return (
    <ul className="">
      <li>
        <NavLink to="/home">home</NavLink>
      </li>
      <li>
        <NavLink to="/facebook">facebook</NavLink>
      </li>
    </ul>
  );
}

export default MainNav;
