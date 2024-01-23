import { HiAcademicCap } from "react-icons/hi";
import PostInput from "./PostInput";
import UserLogo from "./UserLogo";
import Button from "./Button";

function CreatePostFab() {
  return (
    <div className="flex flex-col divide-y divide-zinc-500 rounded-lg bg-zinc-800 p-3 text-gray-300">
      <div className="flex items-center justify-between gap-1">
        <UserLogo />
        <PostInput />
      </div>
      <div className="mt-2 flex  justify-between pt-2">
        <Button icon={<HiAcademicCap />} color="text-red-600">
          Live Video
        </Button>
        <Button color="text-green-500" icon={<HiAcademicCap />}>
          Photo Video
        </Button>
        <Button color="text-yellow-400" icon={<HiAcademicCap />}>
          Fellings Activity
        </Button>
      </div>
    </div>
  );
}

export default CreatePostFab;
