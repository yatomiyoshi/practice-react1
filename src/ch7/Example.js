import Child from "./components/Child";
import Theme from "./components/Theme";
import UseReducerComp from "./components/UseReducerComp";
import UseStateComp from "./components/UseStateComp";

const Example = () => {
  return (
    <>
      <UseStateComp />
      <UseReducerComp />
      <Child />
      <Theme />
    </>
  );
};

export default Example;
