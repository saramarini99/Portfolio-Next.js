"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [test, setTest] = useState(0);
  if (test < 10) setTest((x) => x + 1);

  // function getStart() {
  //   setTest(x=>x+1)
  // }

  return (
    <div className="w-full h-64  dark:bg-black dark:text-red-50 flex items-center justify-center">
      {test}
    </div>
  );
}
