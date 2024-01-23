import { FaFacebook, FaHome, FaPlay, FaUserFriends } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiAnnotation } from "react-icons/hi";
import Input from "./Input";
import ListItem from "./ListItem";
import { Link } from "react-router-dom";

function FabNav() {
  return (
    <div className="fixed top-[4.92rem] z-30 w-full ">
      <div className="text-3xl">
        <RxHamburgerMenu />
      </div>
      <header className="grid grid-cols-3 gap-1  border-b-[1px] border-greyV1 bg-darkV1 p-[4px] px-4">
        <div className=" flex w-[20rem] items-center gap-1 bg-red-300">
          <Link
            to="/facebook"
            className="mr-1 rounded-full text-[2.5rem] text-primary"
          >
            <FaFacebook />
          </Link>
          <Input placeholder="Search here!" type="password" />
        </div>
        <nav className="order-last w-full bg-red-400 text-3xl">
          <ul className="m-auto flex items-center gap-2 ">
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
        <div className="flex flex-row-reverse bg-red-500 text-3xl">
          <ul className="flex items-center gap-2 bg-white">
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
