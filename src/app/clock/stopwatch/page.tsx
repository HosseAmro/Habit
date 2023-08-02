"use client";
import ShowTime from "@/components/ShowTime";
import { useState, useEffect } from "react";
import { BsPlayFill, BsStopFill, BsPauseFill } from "react-icons/bs";
import { TiFlag } from "react-icons/ti";
export default function Stopwatch() {
  const [flage, setflage] = useState<flage1[]>([]);
  const [isActive, setIsActive] = useState(false);
  const [isDone, setIsDone] = useState(true);
  const [time, settime] = useState(0);
  const hour = Math.floor(time / 360000);
  const min = Math.floor((time / 6000) % 60);
  const sec = Math.floor((time / 100) % 60);
  const minsec = Math.floor(time % 100);
  type flage1 = {
    start: string;
    total: string;
    time: number;
  };

  useEffect(() => {
    let interval: NodeJS.Timer;
    if (isActive) {
      interval = setInterval(() => {
        settime((seconds) => seconds + 1);
      }, 10);
    }
    return () => clearInterval(interval);
  }, [isActive]);

  const handleReset = () => {
    settime(0);
    setIsActive(false);
    setIsDone(true);
    setflage([]);
  };
  const handleStartStop = () => {
    setIsActive(!isActive);
    if (hour == 0 && min == 0 && sec == 0 && minsec == 0) {
      setIsDone(false);
    }
  };

  const handlenew = () => {
    const start: string =
      `${hour >= 10 ? hour : `0${hour}`}` +
      `:` +
      `${min >= 10 ? min : `0${min}`}` +
      `:` +
      `${sec >= 10 ? sec : `0${sec}`}` +
      `:` +
      `${minsec >= 10 ? minsec : `0${minsec}`}`;

    const total = TotalTime1(time);

    setflage((old) => [
      ...old,
      {
        time: time,
        start: start,
        total: total,
      },
    ]);
  };
  function TotalTime1(end: number): string {
    let start = 0;
    if (flage.length >> 0) {
      start = flage[flage.length - 1].time;
    }

    const totaltime = end - start;

    const hourtotal = Math.floor(totaltime / 360000);
    const mintotal = Math.floor((totaltime / 6000) % 60);
    const sectotal = Math.floor((totaltime / 100) % 60);
    const minsectotal = Math.floor(totaltime % 100);

    const start1: string =
      `${hourtotal >= 10 ? hourtotal : `0${hourtotal}`}:` +
      `${mintotal >= 10 ? mintotal : `0${mintotal}`}:` +
      `${sectotal >= 10 ? sectotal : `0${sectotal}`}:` +
      `${minsectotal >= 10 ? minsectotal : `0${minsectotal}`}`;
    return start1;
  }

  return (
    <div>
      <h1 className="font-bold text-[2rem] p-5">Stopwatch</h1>
      <div className="bg-yellow-600 font-bold text-[1.4rem] md:text-[1.8rem] p-5 w-[17rem] md:w-[24rem] m-auto rounded-lg">
        <span>{hour >= 10 ? hour : `0${hour}`}:</span>
        <span>{min >= 10 ? min : `0${min}`}:</span>
        <span>{sec >= 10 ? sec : `0${sec}`}:</span>
        <span>{minsec >= 10 ? minsec : `0${minsec}`}</span>
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
      {!isDone && !isActive && (
        <button
          className="m-6 md:h-14 text-yellow-600 text-[3rem] md:text-[3.7rem] font-bold pt-8"
          onClick={handleReset}
        >
          <BsStopFill className="m-auto" />
        </button>
      )}
      {!isDone && isActive && (
        <button
          className="m-6 md:h-14 text-yellow-600 text-[3rem] md:text-[3.7rem] font-bold pt-8"
          onClick={handlenew}
        >
          <TiFlag className="m-auto" />
        </button>
      )}
      <div className="font-bold text-[1.4rem] md:text-[1.8rem] p-5 w-[17rem] md:w-[24rem] m-auto rounded-lg">
        {flage.map((pont, index) => {
          return <ShowTime key={index} start={pont.start} index={index} total={pont.total} />;
        })}
      </div>
    </div>
  );
}
