import { useContext } from "react";
import { ThemeContext } from "./Theme";

const Main = () => {
  const [theme] = useContext(ThemeContext);
  return (
    <main className={"content-${theme}"}>
      <h1>テーマ</h1>
    </main>
  );
};

export default Main;
