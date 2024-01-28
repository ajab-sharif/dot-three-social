import { useState } from "react";
import { useGlobalContext } from "../../utils/context/context";
import { useNavigate } from "react-router-dom";

function YouMyVideo() {
  const { setYoutubeData } = useGlobalContext();
  const navigate = useNavigate();

  const [banner, setBanner] = useState("");
  const [title, setTitle] = useState("");
  console.log(banner);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newYoutubeData = { banner, title };
    setYoutubeData((prevYoutubeData) => [...prevYoutubeData, newYoutubeData]);
    setBanner("");
    setTitle("");
    navigate("/youtube/feed");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="banner">Add: </label>
          <input
            type="file"
            name="banner"
            required
            value={banner}
            onChange={(e) => setBanner(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            name="title"
            required
            style={{ color: "black" }}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <button type="submit">publish</button>
      </form>
    </div>
  );
}

export default YouMyVideo;
