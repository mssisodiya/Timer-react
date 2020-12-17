import React, { useRef, useState } from "react";

function Timer() {
  const [timer, setTimer] = useState(3600);
  const increment = useRef(null);

  const handleStart = () => {
    increment.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const handlePause = () => {
    clearInterval(increment.current);
  };

  const formatTime = () => {
    const seconds = `0${timer % 60}`.slice(-2);
    const min = `${Math.floor(timer / 60)}`;
    const minutes = `0${min % 60}`.slice(-2);
    const hours = `0${Math.floor(timer / 3600)}`.slice(-2);

    return `${hours} : ${minutes} : ${seconds}`;
  };

  return (
    <div>
      <h2>HH : MM : SS</h2>
      <h2>{formatTime()}</h2>
      <button className="btn btn-primary btn-lg" onClick={handleStart}>
        Start
      </button>
      <button className="btn btn-danger btn-lg" onClick={handlePause}>
        Stop
      </button>
    </div>
  );
}

export default Timer;
