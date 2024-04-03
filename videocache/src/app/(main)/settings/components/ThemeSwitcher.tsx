"use client";
import { useEffect, useState } from "react";
import { mode } from "@/app/constants";
import { Theme } from "@/app/types";
import { PREFIX } from "@/app/constants";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>(() => {
    // get from localstorage
    const theme = localStorage.getItem(PREFIX + "theme");
    if (theme) {
      return theme as Theme;
    }
    return mode.LIGHT;
  });

  useEffect(() => {
    localStorage.setItem(PREFIX + "theme", theme);
  }, [theme]);

  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <span>Dark</span>
      <button
        type="button"
        className={`rounded-full border-2 transition-colors duration-300 ${theme === mode.DARK ? "border-gray-700":"border-yellow-700"} h-[2rem] w-[3.75rem] flex items-center before:border-t-2  before:w-[1.5rem] before:h-[1.5rem] before:transition-all  before:duration-300 before:rounded-full before:border-2  ${
          theme === mode.LIGHT
            ? "before:translate-x-[2rem] before:bg-yellow-400 before:rotate-180 before:border-t-yellow-400 before:border-b-yellow-400"
            : "before:translate-x-0 before:bg-gray-700  before:border-t-gray-700 before:border-b-gray-700 "
        }`}
        onClick={() =>
          setTheme((prev) => (prev === mode.LIGHT ? mode.DARK : mode.LIGHT))
        }
      ></button>
      <span className={``}>Light</span>
    </label>
  );
}
