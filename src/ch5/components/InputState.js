import { useState } from "react";

const InputState = () => {
  let [value, setValue] = useState(0);
  return (
    <>
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
      />
      = {value}
    </>
  );
};

export default InputState;
