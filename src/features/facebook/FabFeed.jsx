import CreatePostFab from "../../ui/CreatePostFab";
import StoryCard from "../../ui/facebook/StoryCard";
import Post from "../../ui/facebook/Post";

import PostHead from "../../ui/PostHead";
import InteraciveBox from "../../ui/facebook/InteraciveBox";
import PostBody from "../../ui/facebook/PostBody";

function FabFeed() {
  return (
    <div className="px-3">
      <div className="hidden">aside</div>
      <div className="">
        <CreatePostFab />
      </div>
      <div className="scroll-m-0  overflow-scroll overflow-y-hidden  border-b-2 border-stone-400  px-3 py-5">
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
      <div className="border-b-2 border-stone-400 py-3 ">
        <Post>
          <PostHead />
          {true && <div className="p-1"></div>}
          <PostBody type="text" />
          <InteraciveBox />
        </Post>
      </div>
      <div className="border-b-2 border-stone-400 py-3 ">
        <Post>
          <PostHead />
          <div className="p-1">
            about post Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laboriosam, ut?{" "}
            <button className="text-sky-700">see more...</button>
          </div>
          <PostBody type="image" />
          <InteraciveBox />
        </Post>
      </div>
      <div className="border-b-2 border-stone-400 py-3 ">
        <Post>
          <PostHead />
          <div className="p-1">
            about post Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laboriosam, ut?{" "}
            <button className="text-sky-700">see more...</button>
          </div>
          <PostBody type="video" />
          <InteraciveBox />
        </Post>
      </div>

      <div className="hidden"> aside</div>
    </div>
  );
}

export default FabFeed;
