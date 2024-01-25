import { FaHome, FaPlay, FaUserFriends } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiAnnotation } from "react-icons/hi";
import { Link } from "react-router-dom";
import { RiSearchLine } from "react-icons/ri";
import { IoSettingsSharp } from "react-icons/io5";
import ListItem from "./ListItem";

function FabNav() {
  return (
    <div>
      <header className="border-b-[1px] border-stone-400 px-3 shadow-md">
        <div className="flex justify-between px-2">
          <div className="text-xl font-bold text-sky-500">
            <Link to="/facebook/feed">Facebook</Link>
          </div>
          <div className="flex items-center gap-1 text-xl font-semibold">
            <button>
              <Link to="/facebook/search">
                <RiSearchLine />
              </Link>
            </button>
            <button>
              <RxHamburgerMenu />
            </button>
          </div>
        </div>
        <nav>
          <ul className="m-auto flex items-center justify-between text-gray-600 ">
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
            <ListItem nav={true} to="/facebook/setting">
              <IoSettingsSharp />
            </ListItem>
          </ul>
        </nav>
        <div className="hidden">
          <ul className="bg-gray-200">
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
