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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/facebook" element={<Facebook />} />
          <Route path="/youtube" element={<Youtube />} />
          <Route path="/news" element={<News />} />
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
