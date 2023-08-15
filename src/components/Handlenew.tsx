type flage1 = {
  start: string;
  total: string;
  time: number;
};
type prop1 = {
  time: number;
  hour: number;
  min: number;
  sec: number;
  minsec: number;
  startOld: number;
};
export default function Handlenew({
  time,
  hour,
  min,
  sec,
  minsec,
  startOld,
}: prop1): flage1 {
  const startNew: string =
    `${hour >= 10 ? hour : `0${hour}`}` +
    `:` +
    `${min >= 10 ? min : `0${min}`}` +
    `:` +
    `${sec >= 10 ? sec : `0${sec}`}` +
    `:` +
    `${minsec >= 10 ? minsec : `0${minsec}`}`;

  const total = TotalTime1(time, startOld);
  return {
    start: startNew,
    total: total,
    time: time,
  };
}

function TotalTime1(end: number, start: number): string {
  const totaltime = end - start;

  const hourtotal = Math.floor(totaltime / 360000);
  const mintotal = Math.floor((totaltime / 6000) % 60);
  const sectotal = Math.floor((totaltime / 100) % 60);
  const minsectotal = Math.floor(totaltime % 100);

  const total: string =
    `${hourtotal >= 10 ? hourtotal : `0${hourtotal}`}:` +
    `${mintotal >= 10 ? mintotal : `0${mintotal}`}:` +
    `${sectotal >= 10 ? sectotal : `0${sectotal}`}:` +
    `${minsectotal >= 10 ? minsectotal : `0${minsectotal}`}`;
  return total;
}
