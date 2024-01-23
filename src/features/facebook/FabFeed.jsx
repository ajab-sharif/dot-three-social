import Aside from "../../ui/Aside";
import CreatePostFab from "../../ui/CreatePostFab";
import Sidebar from "./Sidebar";

function FabFeed() {
  return (
    <div className="">
      <div className="hidden">aside</div>
      <div className="px-3">
        <CreatePostFab />
      </div>
      <div className="hidden"> aside</div>
    </div>
  );
}

export default FabFeed;
