import { useReducer } from "react";

const UseReducerComp = () => {
  const [rstate, dispatch] = useReducer((prev, { type }) => {
    if (type === "+") {
      return ++prev;
    } else {
      return --prev;
    }
  }, 0);
  const rCountUp = () => dispatch({ type: "+" });
  const rCountDown = () => dispatch({ type: "-" });
  return (
    <>
      <div>
        <p>Reducer</p>
        <h3>{rstate}</h3>
        <button onClick={rCountUp}>+</button>
        <button onClick={rCountDown}>+</button>
      </div>
    </>
  );
};

export default UseReducerComp;
