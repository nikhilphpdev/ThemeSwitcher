import{ Children, useState } from "react";
import { ThemeContext } from "./ThemeContext";

 const ThemeProvider = ({ children }) => {
    const[theme , setTheme] = useState("light");

    //function to toggle theme
    const toggleTheme =() => {
        setTheme((prev) => (prev =="light" ? "dark":"light"));
    };

    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <div className={theme == "light" ? "light-theme" : "dark-theme"}>
                {children}

            </div>
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;