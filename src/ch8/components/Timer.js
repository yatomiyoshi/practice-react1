import { useEffect, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    window.setInterval(() => {
      setTime((prev) => ++prev);
    }, 1000);
  }, []);

  useEffect(() => {
    console.log("update time");
    return () => {
      console.log("time=" + time);
    };
  }, [time]);

  return (
    <>
      <h3>
        <time>{time}</time>
        <span>秒経過</span>
      </h3>
    </>
  );
};

export default Timer;
