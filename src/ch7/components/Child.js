import { createContext, useState } from "react";
import GrandChild from "./GrandChild";

export const MyContext = createContext();

const Child = () => {
  const [state, setState] = useState(0);
  return (
    <>
      <div style={{ border: "1px solid black", padding: 10 }}>
        <h3>Child Component</h3>
        <MyContext.Provider value={[state, setState]}>
          {/* 下記の記述だと、レンダリング時点でsetStateが実行されてしまう
          そのため無限ループが発生する -> アロー関数で記述すること
          <button onClick={setState((prev) => ++prev)}>+</button> */}
          <button onClick={() => setState((prev) => ++prev)}>+</button>
          <GrandChild />
        </MyContext.Provider>
      </div>
    </>
  );
};

export default Child;
