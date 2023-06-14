import { useContext } from "react";
import { MyContext } from "./Child";

const GrandChild = () => {
  const [state] = useContext(MyContext);
  return (
    <div style={{ border: "1px solid black" }}>
      <h3>GrandChild Component</h3>
      {state}
    </div>
  );
};

export default GrandChild;
