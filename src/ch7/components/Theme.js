import { useState, createContext } from "react";
import "./Theme.css";
import Header from "./Header";
import Main from "./Main";

export const ThemeContext = createContext();

const Theme = () => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <Header />
      <Main />
    </ThemeContext.Provider>
  );
};

export default Theme;
