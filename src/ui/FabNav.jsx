import { FaHome } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function FabNav() {
  return (
    <ul className="flex w-full items-center justify-between bg-sky-400 px-4 py-4">
      <li>
        <NavLink to="/facebook/feed">feed</NavLink>
      </li>
      <li>
        <NavLink to="/facebook/watch">watch</NavLink>
      </li>
      <li>
        <NavLink to="/facebook/me">me</NavLink>
      </li>{" "}
      <li>
        <NavLink to="/facebook/friend">friend</NavLink>
      </li>
      <li>
        <NavLink to="/facebook/setting">setting</NavLink>
      </li>
      <li>
        <NavLink to="/facebook/chat">chat</NavLink>
      </li>
    </ul>
  );
}

export default FabNav;
