import Child from "./components/Child";
import UseReducerComp from "./components/UseReducerComp";
import UseStateComp from "./components/UseStateComp";

const Example = () => {
  return (
    <>
      <UseStateComp />
      <UseReducerComp />
      <Child />
    </>
  );
};

export default Example;
