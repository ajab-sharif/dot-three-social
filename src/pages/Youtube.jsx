import { Outlet } from "react-router-dom";
import YouNav from "./../ui/YouNav";
import "./youtube.css";
import { useGlobalContext } from "../utils/context/context";
function Youtube() {
  const { darkMood } = useGlobalContext();
  return (
    <div className={`${darkMood && "youtube"}`}>
      <h1> You are now using Youtube </h1>
      <YouNav />
      {<Outlet />}
    </div>
  );
}

export default Youtube;
