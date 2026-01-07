"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isLight = resolvedTheme === "light" || resolvedTheme === undefined;

  return (
    <button
      onClick={() => setTheme(isLight ? "dark" : "light")}
      className="p-2 border border-solid rounded-full
       dark:border-white transition cursor-pointer"
      aria-label="Toggle Theme"
    >
      {isLight}
      {isLight ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );
}
