import { Link, NavLink } from "react-router-dom";

function ListItem({ children, to, icon, nav = false }) {
  if (!nav)
    return (
      <li className="">
        <a className="">
          <span className="">{icon}</span>
          <span>{children}</span>
        </a>
      </li>
    );
  return (
    <li className="">
      <NavLink className="" to={to}>
        <span className="">{icon}</span>
        {children}
      </NavLink>
    </li>
  );
}

export default ListItem;
