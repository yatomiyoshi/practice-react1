import Child from "./components/Child";
import Expression from "./components/Expression";

const Example = () => {
  const hello = (name) => <h4>Hello {name}</h4>;
  return (
    <>
      <Child
        color="red"
        fn={hello}
      />
      <Child
        num={123}
        fn={hello}
      />
      <Expression />
    </>
  );
};

export default Example;
