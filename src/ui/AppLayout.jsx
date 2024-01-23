import { Outlet } from "react-router-dom";
import MainNav from "./MainNav";

function AppLayout() {
  return (
    <div>
      <div className="">
        <MainNav />
      </div>
      <div>{<Outlet />}</div>
    </div>
  );
}

export default AppLayout;
