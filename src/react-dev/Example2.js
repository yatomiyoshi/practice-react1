import { useState } from "react";

const MyButton = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => setCount(count + 1);

  return <button onClick={handleClick}>Clicked {count} times</button>;
};

const MyApp1 = () => {
  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton />
      <MyButton />
    </div>
  );
};

export default MyApp1;
