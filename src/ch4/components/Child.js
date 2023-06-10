import "./Child.css";
import List from "./List";

const Child = ({ color = "green", num = 456, fn }) => {
  return (
    <div className={`child ${color}`}>
      <h3>Hello Child</h3>
      <h4>{num}</h4>
      {fn("AAAA")}
      <List />
    </div>
  );
};

export default Child;
