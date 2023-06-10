const Input = () => {
  return (
    <div>
      <div>
        入力値のイベント：
        <input
          type="text"
          onChange={() => alert("onChange検知")}
          onBlur={() => console.log("onBlur検知")}
        />
      </div>
      <div>
        入力値を取得：
        <input
          type="text"
          onChange={(e) => console.log(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Input;
