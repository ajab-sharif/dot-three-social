function PostInput() {
  function hanldeClick(e) {
    alert("click");
  }
  return (
    <div
      className="w-11/12 cursor-pointer rounded-full bg-gray-200 px-3 py-2 text-sm text-stone-700 "
      onClick={hanldeClick}
    >
      <span>What/s on your mind, </span>
    </div>
  );
}

export default PostInput;
