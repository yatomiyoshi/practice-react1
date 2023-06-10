import { useState } from "react";

const ListState = () => {
  const [nums, setNums] = useState([1, 2, 3, 4, 5]);
  const shuffle = () => {
    const newNums = [...nums];
    const value = newNums.pop();
    newNums.unshift(value);
    setNums(newNums);
  };

  return (
    <>
      <h1>{nums}</h1>
      <button onClick={shuffle}>shuffle</button>
    </>
  );
};

export default ListState;
