import "./index.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Facebook from "./pages/Facebook";
import Youtube from "./pages/Youtube";
import News from "./pages/News";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PageNotFound from "./pages/PageNotFound";
import Setting from "./pages/Setting";

import FabFeed from "./features/facebook/FabFeed";
import FabWatch from "./features/facebook/FabWatch";
import FabFriend from "./features/facebook/FabFriend";
import FabChat from "./features/facebook/FabChat";
import FabSetting from "./features/facebook/FabSetting";
import FabMe from "./features/facebook/FabMe";

import YouFeed from "./features/youtube/YouFeed";
import YouMe from "./features/youtube/YouMe";
import YouMyVideo from "./features/youtube/YouMyVideo";
import YouSetting from "./features/youtube/YouFeed";

import NewsFeed from "./features/news/NewsFeed";
import NewsMe from "./features/news/NewsMe";
import NewsMynews from "./features/news/NewsMynews";
import NewsSetting from "./features/news/NewsSetting";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="/home" element={<Home />} />

          <Route path="/facebook" element={<Facebook />}>
            <Route index element={<Navigate replace to="feed" />} />
            <Route path="/facebook/feed" element={<FabFeed />} />
            <Route path="/facebook/friend" element={<FabFriend />} />
            <Route path="/facebook/watch" element={<FabWatch />} />
            <Route path="/facebook/chat" element={<FabChat />} />
            <Route path="/facebook/setting" element={<FabSetting />} />
            <Route path="/facebook/me" element={<FabMe />} />
          </Route>
          <Route path="/youtube" element={<Youtube />}>
            <Route index element={<Navigate replace to="feed" />} />
            <Route path="/youtube/feed" element={<YouFeed />} />
            <Route path="/youtube/me" element={<YouMe />} />
            <Route path="/youtube/myvideo" element={<YouMyVideo />} />
            <Route path="/youtube/setting" element={<YouSetting />} />
          </Route>

          <Route path="/news" element={<News />}>
            <Route index element={<Navigate replace to="feed" />} />
            <Route path="/news/feed" element={<NewsFeed />} />
            <Route path="/news/me" element={<NewsMe />} />
            <Route path="/news/mynews" element={<NewsMynews />} />
            <Route path="/news/setting" element={<NewsSetting />} />
          </Route>

          <Route path="/setting" element={<Setting />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
