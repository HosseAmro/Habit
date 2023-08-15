import { Metadata } from "next";
import { MdOutlineTimer } from "react-icons/md";
import { RiAlarmWarningLine } from "react-icons/ri";
import { PiHourglassBold } from "react-icons/pi";
import { BiLogInCircle } from "react-icons/bi";
import { RxTimer } from "react-icons/rx";
import { AiOutlineUser } from "react-icons/ai";
import { TbFocus2 } from "react-icons/tb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Clock",
  description: "create by hose",
};

export default function RootClock({ children }: { children: React.ReactNode }) {
  return (
    <div className="md:flex md:gap-7 min-h-[100vh] rounded-md text-center font-[600] w-[100vw]">
      <nav className="bg-red-700  min-h-[4rem] md:h-auto md:basis-1/5 flex justify-center gap-4 sm:gap-7 pt-4 md:flex-col md:p-6 md:justify-start text-slate-800 ">
        <Link className="md:flex md:gap-2 " href="/clock">
          <MdOutlineTimer size="1.8rem" />
          <span className="hidden md:inline ">Time</span>
        </Link>
        <Link className="md:flex md:gap-2" href="/clock/stopwatch">
          <RxTimer size="1.8rem" />
          <span className="hidden md:inline ">Stopwatch</span>
        </Link>
        <Link className="md:flex md:gap-2" href="/clock/timer">
          <PiHourglassBold size="1.8rem" />
          <span className="hidden md:inline ">Timer</span>
        </Link>
        <Link className="md:flex md:gap-2" href="/clock/alarm">
          <RiAlarmWarningLine size="1.8rem" />
          <span className="hidden md:inline ">Alarm</span>
        </Link>
        <Link className="md:flex md:gap-2" href="/clock/focus">
          <TbFocus2 size="1.8rem" />
          <span className="hidden md:inline ">Focus</span>
        </Link>
        {/* <Link className="md:flex md:gap-2" href="/login">
          <BiLogInCircle size="1.8rem" />
          <span className="hidden md:inline ">Login</span>
        </Link> */}
        {/* <Link className="md:flex md:gap-2" href="/home">
          <AiOutlineUser size="1.8rem" />{" "}
          <span className="hidden md:inline ">Home</span>
        </Link> */}
      </nav>
      <main className="bg-blue-600 min-h-[40rem] md:h-auto md:basis-4/5">
        {children}
      </main>
    </div>
  );
}
