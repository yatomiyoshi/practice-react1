const List = () => {
  const animals = ["Cat", "Dog", "Pig"];
  const helloAnimals = animals.map((animal) => (
    <li key={animal}>Hello {animal}</li>
  ));
  return (
    <>
      <ul>{helloAnimals}</ul>
    </>
  );
};

export default List;
