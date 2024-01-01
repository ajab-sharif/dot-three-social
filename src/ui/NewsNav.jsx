import { NavLink } from "react-router-dom";

function FabNav() {
  return (
    <ul className="flex w-full items-center justify-between bg-sky-400 px-4 py-4">
      <li>
        <NavLink to="/news/feed">feed</NavLink>
      </li>
      <li>
        <NavLink to="/news/me">me</NavLink>
      </li>
      <li>
        <NavLink to="/news/mynews">my news</NavLink>
      </li>
      <li>
        <NavLink to="/news/setting">setting</NavLink>
      </li>
    </ul>
  );
}

export default FabNav;
