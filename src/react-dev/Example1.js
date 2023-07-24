const products = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
];

const MyButton = () => {
  const handleClick = () => alert("You clicked me!");

  return <button onClick={handleClick}>Click me</button>;
};

const Example1 = () => {
  const listItems = products.map((product) => (
    <li
      key={product.id}
      style={{
        color: product.isFruit ? "magenta" : "darkgreen",
      }}
    >
      {product.title}
    </li>
  ));

  return (
    <>
      <ul>{listItems}</ul>
      <MyButton />
    </>
  );
};

export default Example1;
