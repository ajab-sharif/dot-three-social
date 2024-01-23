import Aside from "../../ui/Aside";
import CreatePostFab from "../../ui/CreatePostFab";
import Sidebar from "./Sidebar";

function FabFeed() {
  return (
    <div className="flex justify-between gap-10">
      <div>aside</div>
      <div className="py-7">
        <CreatePostFab />
      </div>
      <div> aside</div>
    </div>
  );
}

export default FabFeed;
