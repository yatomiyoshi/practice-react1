import "./Expression.css";

const Expression = () => {
  const title = "Expression";
  const array = ["item1", "item2", "item3"];
  const hello = (arg) => `${arg} Function`;
  const helloJSX = <h4>Hello JSX</h4>;
  return (
    <>
      <h3>Hello Expression</h3>
      <div className={title.toLowerCase()}>
        <h3>{title}</h3>
        <h3>{array}</h3>
        <h3>{hello("Hello")}</h3>
        {helloJSX}
      </div>
    </>
  );
};

export default Expression;
