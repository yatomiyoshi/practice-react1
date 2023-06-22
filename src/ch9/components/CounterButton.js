import { useDispatch } from "react-redux";
import { add, minus } from "../modules/counter";

const CounterButton = ({ calculationType, step }) => {
  const CounterDispatch = useDispatch();
  const clickHandler = () => {
    const action = calculationType === "+" ? add(step) : minus(step);
    CounterDispatch(action);
  };
  return (
    <button onClick={clickHandler}>
      {calculationType}
      {step}
    </button>
  );
};

export default CounterButton;
