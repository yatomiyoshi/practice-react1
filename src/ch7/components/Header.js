import { useContext } from "react";
import { ThemeContext } from "./Theme";
const Header = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  const changeTheme = (e) => setTheme(e.target.value);
  const THEME = ["light", "dark", "red"];
  return (
    <header className={"content-${theme}"}>
      {THEME.map((_theme) => {
        return (
          <label>
            <input
              type="radio"
              key={_theme}
              value={_theme}
              checked={theme === _theme}
              onChange={changeTheme}
            />
            {_theme}
          </label>
        );
      })}
    </header>
  );
};

export default Header;
