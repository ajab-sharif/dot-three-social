import CreatePostFab from "../../ui/CreatePostFab";
import StoryCard from "../../ui/facebook/StoryCard";

function FabFeed() {
  return (
    <div className="px-3">
      <div className="hidden">aside</div>
      <div className="">
        <CreatePostFab />
      </div>
      <div className="bg-stone-10s  scroll-m-0 overflow-scroll  overflow-y-hidden border-b-2 border-stone-400 px-3 py-5">
        <ul className="flex gap-2">
          <li>
            <StoryCard post={true} />
          </li>
          <li>
            <StoryCard />
          </li>{" "}
          <li>
            <StoryCard />
          </li>{" "}
          <li>
            <StoryCard />
          </li>
          <li>
            <StoryCard />
          </li>
          <li>
            <StoryCard />
          </li>
        </ul>
      </div>
      <div className="hidden"> aside</div>
    </div>
  );
}

export default FabFeed;
