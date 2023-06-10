const Button = () => {
  const clickHandler1 = () => alert("ボタンがクリックされました");
  const clickHandler2 = () => alert("ボタンがクリックされました");
  return (
    <>
      <button onClick={clickHandler1}>クリック！</button>
      <button onClick={clickHandler2}>クリック！</button>
    </>
  );
};

export default Button;
