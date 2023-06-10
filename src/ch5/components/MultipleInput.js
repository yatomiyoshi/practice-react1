import { useState } from "react";

const MultipleInput = () => {
  const [valueA, setValueA] = useState(0);
  const [valueB, setValueB] = useState(0);
  const [valueC, setValueC] = useState(0);
  return (
    <>
      <p>ボタンAを{valueA}回押しました！</p>
      <button onClick={() => setValueA(valueA + 1)}>ボタンA</button>
      <p>ボタンBを{valueB}回押しました！</p>
      <button onClick={() => setValueB(valueB + 1)}>ボタンB</button>
      <p>ボタンCを{valueC}回押しました！</p>
      <button onClick={() => setValueC(valueC + 1)}>ボタンC</button>
    </>
  );
};

export default MultipleInput;
