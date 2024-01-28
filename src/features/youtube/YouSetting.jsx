import "./youtube-setting.css";
import { useGlobalContext } from "../../utils/context/context";

function YouSetting() {
  const { darkMood, setDarkMood } = useGlobalContext();
  return (
    <div className="youtube-setting">
      <button
        className={`${darkMood ? "dark-mood-btn" : "dark-mood-light"}`}
        onClick={() => setDarkMood(!darkMood)}
      >
        {darkMood ? "Light" : "Dark"}
      </button>
    </div>
  );
}

export default YouSetting;
