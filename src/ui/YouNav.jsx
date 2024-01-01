import { NavLink } from "react-router-dom";

function FabNav() {
  return (
    <ul className="flex w-full items-center justify-between bg-sky-400 px-4 py-4">
      <li>
        <NavLink to="/youtube/feed">feed</NavLink>
      </li>
      <li>
        <NavLink to="/youtube/me">me</NavLink>
      </li>{" "}
      <li>
        <NavLink to="/youtube/myvideo">my video</NavLink>
      </li>
      <li>
        <NavLink to="/youtube/setting">setting</NavLink>
      </li>
    </ul>
  );
}

export default FabNav;
