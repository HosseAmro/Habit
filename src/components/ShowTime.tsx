import React from "react";

type Props = {
  start: string;
  index: number;
  total: string;
};

export default function ShowTime({ start, index, total }: Props) {
  return (
    <>
      <div className=" bg-yellow-600 my-2 rounded-lg">
        <span>
          {`${index + 1}.   `}
          {start}
        </span>
        <br />
        <span>+{total}</span>
      </div>
    </>
  );
}
