import { useContext, createContext, useState, useEffect } from "react";

const AppContext = createContext();

const getDarkMoodFromLocalStorage = () => {
  let darkMood = localStorage.getItem("dark-mood");
  if (darkMood) {
    return JSON.parse(darkMood);
  }
};

const intialYoutubeData = [
  {
    banner: "",
    logo: "logo1",
    title: "this is title of top 10 games",
    name: "total gaming",
    views: 100,
  },
  {
    banner: "",
    logo: "logo2",
    title: "this is title of top 10 yt video",
    name: "mr beast",
    views: 200,
  },
  {
    banner: "",
    logo: "logo3",
    title: "free fire 1 vs 4",
    name: "b2k",
    views: 300,
  },
];
const AppProvider = ({ children }) => {
  const [darkMood, setDarkMood] = useState(getDarkMoodFromLocalStorage(false));
  const [youtubeData, setYoutubeData] = useState(intialYoutubeData);

  useEffect(() => {
    localStorage.setItem("dark-mood", JSON.stringify(darkMood));
  }, [darkMood]);

  return (
    <AppContext.Provider
      value={{ darkMood, setDarkMood, youtubeData, setYoutubeData }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
