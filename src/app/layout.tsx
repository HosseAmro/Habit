import "./globals.css";
import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import Link from "next/link";

const font = Josefin_Sans({
  style: "normal",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});
export const metadata: Metadata = {
  title: "Habit",
  description: "create by hose",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <nav className="bg-green-900 flex justify-around py-4">
          <Link href="/clock" className=" ">
            {" "}
            Clock
          </Link>
          <Link href="/login" className=" ">
            {" "}
            login
          </Link>
          <Link href="/home" className=" ">
            {" "}
            home
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
