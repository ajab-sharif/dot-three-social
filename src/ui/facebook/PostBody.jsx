function PostBody({ type }) {
  if (type === "image")
    return (
      <div className="grid gap-2 p-4">
        <ul>
          <li>
            <img src="./../../../public/ajabsharif.jpg" alt="" />
          </li>
        </ul>
      </div>
    );
  if (type === "text")
    return (
      <div className="p-4 text-left">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga corporis
          harum earum enim modi, rerum quaerat expedita saepe! Rerum
          reprehenderit laboriosam molestias officiis esse nemo sint debitis
          consectetur vel earum.
        </p>
      </div>
    );
  if (type === "video")
    return (
      <div className="p-4">
        <div className="grid gap-2">
          <video controls className="cursor-pointer">
            <source src="../../../../video.mp4" type="video/mp4" />
            <source src="../../../../video.ogg" type="video/ogg" />
          </video>
        </div>
      </div>
    );
}

export default PostBody;
