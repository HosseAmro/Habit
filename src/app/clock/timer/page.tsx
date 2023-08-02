"use client";
import { useState, useEffect } from "react";
// import useSound from "use-sound";
function Timer() {
  const [minsec, setMinsec] = useState(0);
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(1);
  const [isActive, setIsActive] = useState(false);
  // const [playSound, { stop }] = useSound("/sound.mp3");
  useEffect(() => {
    let interval: NodeJS.Timer;
    if (isActive && sec > 0) {
      interval = setInterval(() => {
        setSec((sec) => sec - 1);
      }, 1000);
    } else if (sec === 0) {
      stop();
      // playSound();
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, sec]);

  const handleStart = () => setIsActive(true);
  const handlePause = () => setIsActive(false);
  const handleReset = () => {
    setIsActive(false);
    setSec(0);
  };

  return (
    <div>
      <h1>{sec} sec</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Timer;
