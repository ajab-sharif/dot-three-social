import { Outlet } from "react-router-dom";
import FavNav from "./../ui/FabNav";
function Facebook() {
  return (
    <div>
      <h1> You are now using Facebook </h1>
      <FavNav />
      {<Outlet />}
    </div>
  );
}

export default Facebook;
