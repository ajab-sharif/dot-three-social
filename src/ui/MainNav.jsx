import { NavLink } from "react-router-dom";

import { FaHome } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";

function MainNav() {
  return (
    <nav className="flex justify-between rounded-md bg-stone-100 p-3 text-2xl shadow-md">
      <div>
        <a href="/home" className="font-semibold uppercase">
          .3Social
        </a>
      </div>
      <ul className="flex w-full max-w-60 items-center justify-between px-4 text-sky-500">
        <li>
          <NavLink
            to="/home"
            className="transition-all duration-100 hover:text-sky-600"
          >
            <FaHome />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/facebook"
            className="transition-all duration-100 hover:text-3xl hover:text-sky-600 active:text-sky-600"
          >
            <FaFacebook />
          </NavLink>
        </li>
        <li>
          <NavLink to="/youtube">
            <FaYoutube />
          </NavLink>
        </li>
        <li>
          <NavLink to="/news">
            <FaNewspaper />
          </NavLink>
        </li>
        <li>
          <NavLink to="/setting">
            <IoSettingsSharp />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
