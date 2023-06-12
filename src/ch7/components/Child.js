import { createContext } from "react";
import GrandChild from "./GrandChild";

export const MyContext = createContext("hello World!");

const Child = () => {
  return (
    <>
      <div style={{ border: "1px solid black", padding: 10 }}>
        <h3>Child Component</h3>
        <GrandChild />
      </div>
    </>
  );
};

export default Child;
