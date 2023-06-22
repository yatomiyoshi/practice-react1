import CounterButton from "./CounterButton";
import CounterResult from "./CounterResult";

const Counter = () => {
  return (
    <>
      <CounterResult />
      <CounterButton
        step={2}
        calculationType={"+"}
      />
      <CounterButton
        step={2}
        calculationType={"-"}
      />
      <CounterButton
        step={10}
        calculationType={"+"}
      />
      <CounterButton
        step={10}
        calculationType={"-"}
      />
    </>
  );
};

export default Counter;
