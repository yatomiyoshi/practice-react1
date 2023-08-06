import "./App.css";
import Example1 from "./react-dev/Example1";
import List from "./react-dev/Example10";
import {
  Button1,
  Signup,
  Toolbar,
  Toolbar2,
  Toolbar3,
} from "./react-dev/Example11";
import MyApp1 from "./react-dev/Example2";
import MyApp2 from "./react-dev/Example3";
import ProductApp from "./react-dev/Example4";
import Gallery from "./react-dev/Example5";
import { TodoList } from "./react-dev/Example6";
import Profile from "./react-dev/Example7";
import PackingList from "./react-dev/Example8";
import PackingList2 from "./react-dev/Example9";

function App() {
  return (
    <>
      <div className="App"></div>
      <Example1 />
      <MyApp1 />
      <MyApp2 />
      <ProductApp />
      <Gallery />
      <TodoList />
      <Profile />
      <PackingList />
      <PackingList2 />
      <List />
      <Button1 />
      <Toolbar />
      <Toolbar2 />
      <Toolbar3 />
      <Signup />
    </>
  );
}

export default App;
