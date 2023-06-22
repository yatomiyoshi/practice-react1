import { useSelector } from "react-redux";

const CounterResult = () => {
  const count = useSelector((state) => state);
  return <h3>{count.counter}</h3>;
};

export default CounterResult;
