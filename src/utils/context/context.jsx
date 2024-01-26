import { useContext, createContext, useState, useEffect } from "react";

const AppContext = createContext();

const getDarkMoodFromLocalStorage = () => {
  let darkMood = localStorage.getItem("dark-mood");
  if (darkMood) {
    return JSON.parse(darkMood);
  }
};
const AppProvider = ({ children }) => {
  const [darkMood, setDarkMood] = useState(getDarkMoodFromLocalStorage(false));

  useEffect(() => {
    localStorage.setItem("dark-mood", JSON.stringify(darkMood));
  }, [darkMood]);
  return (
    <AppContext.Provider value={{ darkMood, setDarkMood }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
