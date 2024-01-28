import { useGlobalContext } from "../../utils/context/context";
import "./youtube-feed.css";
function YouFeed() {
  const { youtubeData } = useGlobalContext();
  return (
    <div className="youtube-feed">
      {youtubeData.map((item, index) => {
        const { banner, logo, name, title, views } = item;
        return (
          <div className="single-feed" key={index}>
            <img src={banner} alt={title} />
            <div className="info">
              <img src={logo} alt={name} />
            </div>
            <div className="title-info">
              <h2>{title}</h2>
              <p>
                <span>{name}</span>
                <span>views: {views}</span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default YouFeed;
