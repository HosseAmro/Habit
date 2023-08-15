"use client";
import { BsPauseFill, BsPlayFill, BsStopFill } from "react-icons/bs";
import InpotNumber from "@/components/InpotnNmber";
import { useState, useEffect } from "react";
function Timer() {
  const [isActive, setIsActive] = useState(false);
  const [isDone, setIsDone] = useState(true);
  const [time, settime] = useState(0);
  const hour = Math.floor(time / 3600);
  const min = Math.floor((time / 60) % 60);
  const sec = Math.floor(time % 60);

  useEffect(() => {
    let interval: NodeJS.Timer;
    if (isActive && time > 0) {
      interval = setInterval(() => {
        settime((time) => time - 1);
      }, 1000);
    } else if (time === 0) {
      setIsDone(true);
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  const handleReset = () => {
    settime(0);
    setIsActive(false);
    setIsDone(true);
  };

  const handleStartStop = () => {
    setIsActive(!isActive);
    if (time == 0) {
      setIsDone(true);
    } else {
      setIsDone(false);
    }
  };
  function onChange1(value: number, name: "hour" | "min" | "sec"): void {
    let value1 = value || 0;
    if (value1 < 0) {
      value1 = 0;
    }
    const hour1 = hour * 3600;
    const min1 = min * 60;
    const sec1 = sec * 1;

    if (name == "hour") {
      if (value1 > 99) {
        value1 = 99;
      }
      const newHour = value1 * 3600;
      settime(newHour + min1 + sec1);
    } else if (name == "min") {
      if (value1 > 59) {
        value1 = 59;
      }
      const newMin = value1 * 60;
      settime(hour1 + newMin + sec1);
    } else if (name == "sec") {
      if (value1 > 59) {
        value1 = 59;
      }
      settime(hour1 + min1 + value1);
    }
  }
  return (
    <div>
      <h1 className="font-bold text-[2rem] p-5">Timer</h1>
      <div className="bg-yellow-600 w-[17rem] md:w-[24rem] m-auto rounded-lg">
        <form className="font-bold text-[1.9rem] md:text-[2.5rem] flex ml-4">
          <InpotNumber
            name="hour"
            value={hour}
            onChange1={onChange1}
            isActive={isActive}
          />
          :
          <InpotNumber
            name="min"
            value={min}
            onChange1={onChange1}
            isActive={isActive}
          />
          :
          <InpotNumber
            name="sec"
            value={sec}
            onChange1={onChange1}
            isActive={isActive}
          />
        </form>
      </div>

      <button
        className="m-6 md:h-14 text-yellow-600 text-[3rem] md:text-[3.7rem] font-bold pt-8"
        onClick={handleStartStop}
      >
        {isActive ? (
          <BsPauseFill className="m-auto" />
        ) : (
          <BsPlayFill className="m-auto" />
        )}
      </button>
      {!isDone && (
        <button
          className="m-6 md:h-14 text-yellow-600 text-[3rem] md:text-[3.7rem] font-bold pt-8"
          onClick={handleReset}
        >
          <BsStopFill className="m-auto" />
        </button>
      )}
    </div>
  );
}

export default Timer;
