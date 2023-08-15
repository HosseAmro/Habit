import { ChangeEvent } from "react";

type Props = {
  name: "hour" | "min" | "sec";
  value: number;
  onChange1(value: number, name: string): void;
  isActive: boolean;
};

export default function InpotnNmber({
  name,
  value,
  onChange1,
  isActive,
}: Props) {
  function onChange0(e: ChangeEvent<HTMLInputElement>) {
    onChange1(e.target.valueAsNumber, name);
    console.log(e.target.value);
  }
  return (
    <input
      type="number"
      name={name}
      id={name}
      value={value}
      onChange={onChange0}
      disabled={isActive}
      className="w-[30%] bg-yellow-600 font-bold text-[1.4rem] md:text-[1.8rem] text-center outline-none"
    />
  );
}
