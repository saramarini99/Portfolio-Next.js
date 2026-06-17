"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import BaseButton from "./BaseButton";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <BaseButton
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      className="!px-2 rounded border transition"
      type="transparent"
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </BaseButton>
  );
}
