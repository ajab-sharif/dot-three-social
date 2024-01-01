import { Outlet } from "react-router-dom";
import MainNav from "./MainNav";

function AppLayout() {
  return (
    <div className="m-5 max-w-[45rem] rounded-md bg-stone-200 p-4">
      <MainNav />
      {<Outlet />}
    </div>
  );
}

export default AppLayout;
