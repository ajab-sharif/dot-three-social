import { Outlet } from "react-router-dom";
import MainNav from "./MainNav";

function AppLayout() {
  return (
    <div>
      <div className="fixed z-30 w-full border-b-[1px] border-greyV1">
        <MainNav />
      </div>
      <div className="relative">{<Outlet />}</div>
    </div>
  );
}

export default AppLayout;
