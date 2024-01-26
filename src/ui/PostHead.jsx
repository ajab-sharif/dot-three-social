import { HiDotsHorizontal, HiDotsVertical } from "react-icons/hi";
import UserLogo from "./UserLogo";

function PostHead({ children }) {
  return (
    <div className="flex items-center justify-between px-4">
      <div className="flex items-center gap-2">
        <UserLogo />
        <div className="flex flex-col items-start">
          <strong>User Name</strong>
          <small>12:29 | 🌍 </small>
        </div>
      </div>
      <div className="text-2xl">
        <HiDotsHorizontal />
      </div>
    </div>
  );
}

export default PostHead;
