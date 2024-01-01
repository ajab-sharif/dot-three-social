import { Outlet } from "react-router-dom";
import YouNav from "./../ui/YouNav";
function Youtube() {
  return (
    <div>
      <h1> You are now using Youtube </h1>
      <YouNav />
      {<Outlet />}
    </div>
  );
}

export default Youtube;
