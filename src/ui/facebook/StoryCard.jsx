import { HiLogin } from "react-icons/hi";

function StoryCard({ post }) {
  if (post)
    return (
      <div className="w-[9rem] cursor-pointer rounded-lg border-2 border-stone-400 bg-stone-200 p-1 text-center font-bold capitalize text-zinc-800">
        <div className="">
          <img
            src="https://scontent.fjed4-5.fna.fbcdn.net/v/t39.30808-1/362273337_974919233560162_1595529308188073794_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=100&ccb=1-7&_nc_sid=5740b7&_nc_ohc=8Em69haNB60AX_G5Egt&_nc_ht=scontent.fjed4-5.fna&oh=00_AfBplLcmsFZV4zI5QxqYcDw-V58mq6u-hZpDayGa9VXYjg&oe=65B8051E"
            alt=""
            className="h-[6rem] w-[9rem]"
          />
        </div>
        <div className="relative h-[5rem]">
          <button className="absolute left-[3.2rem] top-[-2rem] rounded-full border-4 border-stone-200 bg-sky-600 p-2">
            <HiLogin />
          </button>
          <span className="mt-4 block">add story</span>
        </div>
      </div>
    );
  return (
    <div className="relative w-[9rem] cursor-pointer overflow-hidden rounded-lg border-2 border-stone-400 bg-zinc-200 p-1 text-left">
      <div className="h-[12rem]  p-2">
        <span className="absolute left-0 top-0 m-2  rounded-md bg-sky-600 px-2 py-1 text-center text-sm font-semibold text-stone-200">
          1
        </span>
        <div className="text-center">
          {`<<StoryContent>>`}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
          exercitationem modi quasi nemo at excepturi dolor omnis, consequatur
          officia illum architecto consectetur esse ex nobis? A numquam maiores
          magnam sunt.
        </div>
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-zinc-700 p-3 font-bold capitalize text-white">
          <p>fast name</p>
          <p>last name</p>
        </div>
      </div>
    </div>
  );
}

export default StoryCard;
