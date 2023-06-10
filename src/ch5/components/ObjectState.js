import { useState } from "react";

const ObjectState = () => {
  const personObj = { name: "Tom", age: 18 };
  const [person, setPerson] = useState(personObj);
  const chageName = (e) => {
    setPerson({ ...person, name: e.target.value });
  };

  return (
    <>
      <h3>Name: {person.name}</h3>
      <h3>Age: {person.age}</h3>]
      <input
        type="text"
        onChange={chageName}
      />
    </>
  );
};

export default ObjectState;
