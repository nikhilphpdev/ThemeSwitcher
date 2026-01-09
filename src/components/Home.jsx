import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const Home = () => {
    const { theme } = useContext(ThemeContext);
return (
    <div>
      <h1>Welcome to Theme Switcher</h1>
      <p>Current theme: <strong>{theme}</strong></p>
    </div>
  );
};  

// default Home;