import { Outlet } from "react-router-dom";
import FavNav from "./../ui/FabNav";
function Facebook() {
  return (
    <div className="relative w-full">
      <FavNav />
      <main className="absolute top-[9rem] w-full bg-darkV0 py-1">
        {<Outlet />}
      </main>
    </div>
  );
}

export default Facebook;
