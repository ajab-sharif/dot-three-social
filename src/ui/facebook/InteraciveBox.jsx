import { HiChat, HiShare, HiThumbUp } from "react-icons/hi";
import Button from "../Button";

function InteraciveBox() {
  return (
    <div className="flex flex-col px-2 pb-2 text-left">
      <p>👍😁 120k </p>
      <div className="flex justify-between py-2">
        <Button color={"text-stone-600"} icon={<HiThumbUp />}>
          120
        </Button>
        <Button color={"text-stone-600"} icon={<HiChat />}>
          114k
        </Button>
        <Button color={"text-stone-600"} icon={<HiShare />}>
          12k
        </Button>
      </div>
    </div>
  );
}

export default InteraciveBox;
