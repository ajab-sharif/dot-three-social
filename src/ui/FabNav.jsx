import { FaFacebook, FaHome, FaPlay, FaUserFriends } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiAnnotation } from "react-icons/hi";
import Input from "./Input";
import ListItem from "./ListItem";
import { Link } from "react-router-dom";
import { RiSearchLine } from "react-icons/ri";

function FabNav() {
  return (
    <div className="">
      <header className="">
        <div className="flex bg-green-400 p-1">
          <Link to="/facebook/feed">Facebook</Link>
          <div>
            <button>
              <RiSearchLine />
            </button>
            <input type="text" placeholder="search here" />
          </div>
          <button>
            <RxHamburgerMenu />
          </button>
        </div>

        <nav className="">
          <ul className="">
            <ListItem nav={true} to="/facebook/feed">
              <FaHome />
            </ListItem>
            <ListItem nav={true} to="/facebook/friend ">
              <FaUserFriends />
            </ListItem>
            <ListItem nav={true} to="/facebook/watch">
              <FaPlay />
            </ListItem>
            <ListItem nav={true} to="/facebook/chat">
              <HiAnnotation />
            </ListItem>
          </ul>
        </nav>
        <div className="">
          <ul className="">
            <ListItem nav={true} to="/facebook/friend ">
              <FaUserFriends />
            </ListItem>
            <ListItem nav={true} to="/facebook/watch">
              <FaPlay />
            </ListItem>
            <ListItem nav={true} to="/facebook/chat">
              <img
                src="./../../public/ajabsharif.jpg"
                className="h-[39px] w-[39px] rounded-full"
              />
            </ListItem>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default FabNav;
