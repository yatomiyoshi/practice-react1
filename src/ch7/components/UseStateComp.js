import { useState } from "react";

const UseStateComp = () => {
  const [state, setState] = useState(0);
  const countUp = () => {
    setState((prev) => ++prev);
  };
  const countDown = () => {
    setState((prev) => --prev);
  };
  return (
    <>
      <div>
        <p>useState</p>
        <h3>{state}</h3>
        <button onClick={countUp}>+</button>
        <button onClick={countDown}>-</button>
      </div>
    </>
  );
};

export default UseStateComp;
