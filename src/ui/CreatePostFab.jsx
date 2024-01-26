import { HiAcademicCap } from "react-icons/hi";
import PostInput from "./PostInput";
import UserLogo from "./UserLogo";
import Button from "./Button";

function CreatePostFab() {
  return (
    <div className="border-b-2 border-stone-400 py-2">
      <div className="flex  items-center justify-center gap-1 text-sm">
        <UserLogo />
        <PostInput />
        <Button
          color="text-green-500"
          icon={<HiAcademicCap />}
          horizontal={true}
        >
          Photo
        </Button>
      </div>
      {/* <div className="">
        <Button icon={<HiAcademicCap />} color="text-red-600">
          Live Video
        </Button>
        <Button color="text-green-500" icon={<HiAcademicCap />}>
          Photo Video
        </Button>
        <Button color="text-yellow-400" icon={<HiAcademicCap />}>
          Fellings Activity
        </Button>
      </div> */}
    </div>
  );
}

export default CreatePostFab;
