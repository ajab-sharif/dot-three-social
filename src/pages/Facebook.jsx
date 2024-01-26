import { Outlet } from "react-router-dom";
import FavNav from "./../ui/FabNav";
function Facebook() {
  return (
    <div className="">
      <FavNav />
      <main className="bg-stone-100">{<Outlet />}</main>
    </div>
  );
}

export default Facebook;
