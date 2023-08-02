"use client";
import { format } from "date-fns";
import { formatInTimeZone } from "date-fns-tz";
import { ChangeEvent, useState, useEffect } from "react";
export default function Time() {
  const [allCity, setallCity] = useState(["Asia/Tehran"]);
  const [zone, setzone] = useState("Asia/Tehran");
  const [AM, setAM] = useState(true);
  const [time, settime] = useState(new Date(2023));
  const time1 = formatInTimeZone(time, zone, "HH : mm : ss");
  const time2 = formatInTimeZone(time, zone, "hh : mm : ss aa");
  useEffect(() => {
    async function getcity() {
      const cityResponse = await fetch("http://worldtimeapi.org/api/timezone");
      const city = (await cityResponse.json()) as string[];
      setallCity(city);
    }
    getcity();
  }, []);
  function timeing() {
    settime(new Date());
  }
  useEffect(() => {
    const tick = setInterval(timeing, 1000);

    return () => {
      clearInterval(tick);
    };
  });

  function changeZone(e: ChangeEvent<HTMLSelectElement>) {
    setzone(e.target.value.toString());
  }
  return (
    <>
      <div className="font-bold text-[2rem] p-5">Time</div>
      <h1 className="bg-yellow-600 font-bold text-[1.4rem] md:text-[1.8rem] p-5 w-[17rem] md:w-[24rem] m-auto rounded-lg">
        {AM ? time1 : time2}
      </h1>
      <select
        name="city"
        id="city"
        value="Asia/Tehran"
        onChange={changeZone}
        className="rounded-lg m-7 w-[16rem] h-[3.3rem] text-yellow-600 text-[1.4rem] md:text-[1.8rem] text-center md:w-[24rem]"
      >
        {allCity.map((city, index) => {
          return (
            <option
              value={city}
              key={city}
              className="text-[.9rem] md:text-[1.3rem]"
            >
              {city}
            </option>
          );
        })}
      </select>
      <br />
      <button
        className="rounded-lg m-3 w-12 h-12 md:w-14 md:h-14 border-2 border-yellow-600 text-yellow-600 text-[1.4rem] md:text-[1.8rem] font-bold"
        onClick={(e) => setAM((old) => !old)}
      >
        {AM ? "24" : "12"}
      </button>
    </>
  );
}
