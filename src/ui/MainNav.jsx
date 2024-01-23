import { FaHome } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import ListItem from "./ListItem";

function MainNav() {
  return (
    <nav className="flex items-center justify-between">
      <div className="text-xl font-bold">.3Social</div>
      <ul className="flex">
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
