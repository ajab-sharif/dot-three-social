import { Outlet } from "react-router-dom";
import NewsNav from "./../ui/NewsNav";
function News() {
  return (
    <div>
      <h1> You are now using News </h1>
      <NewsNav />
      {<Outlet />}
    </div>
  );
}

export default News;
