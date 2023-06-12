import { useContext } from "react";
import { MyContext } from "./Child";

const GrandChild = () => {
  const value = useContext(MyContext);
  return (
    <div style={{ border: "1px solid black" }}>
      <h3>GrandChild Component</h3>
      {value}
    </div>
  );
};

export default GrandChild;
