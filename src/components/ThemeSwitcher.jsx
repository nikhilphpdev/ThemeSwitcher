import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

 const tThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: "10px 20px",
        arginTop: "20px",
        cursor: "pointer",
        borderRadius: "8px",
      }}
    >
      {" "}
      switch to {theme === "light" ? " Dark" : "Light"}
    </button>
  );
};
export default ThemeSwitcher;