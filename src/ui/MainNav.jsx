import { FaHome } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import ListItem from "./ListItem";

function MainNav() {
  return (
    <nav className="flex justify-between  bg-darkV0 py-3 text-2xl">
      <div>
        <a
          href="/home"
          className="hidden font-semibold uppercase text-stone-300"
        >
          .3Social
        </a>
      </div>
      <ul className="md:px-4 flex items-center justify-between text-sky-500">
        <ListItem nav={true} to="/home">
          <FaHome />
        </ListItem>
        <ListItem nav={true} to="/facebook">
          <FaFacebook />
        </ListItem>

        <ListItem nav={true} to="/youtube">
          <FaYoutube />
        </ListItem>
        <ListItem nav={true} to="/news">
          <FaNewspaper />
        </ListItem>
        <ListItem nav={true} to="/setting">
          <IoSettingsSharp />
        </ListItem>
      </ul>
    </nav>
  );
}

export default MainNav;
