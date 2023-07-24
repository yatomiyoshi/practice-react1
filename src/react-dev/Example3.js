import { useState } from "react";

const MyButton = ({ count, onClick }) => {
  return <button onClick={onClick}>Clicked {count} times</button>;
};

const MyApp2 = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => setCount(count + 1);

  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
};

export default MyApp2;
