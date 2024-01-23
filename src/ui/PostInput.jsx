function PostInput() {
  function hanldeClick(e) {
    alert("click");
  }
  return (
    <div
      className="w-11/12 cursor-pointer rounded-full bg-zinc-600 px-6 py-[.7rem] hover:bg-zinc-500  focus:outline-none"
      onClick={hanldeClick}
    >
      <span>What/s on your mind, USERNAME </span>
    </div>
  );
}

export default PostInput;
