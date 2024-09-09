"use client";
import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export default function DarkModeButton({
  isDark,
  setIsDark,
}: {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="dark:bg-dark-secondary dark:text-white-primary fixed bottom-2 right-2 rounded-full border-2 border-black bg-white p-2"
    >
      {isDark ? <Sun /> : <Moon />}
    </button>
  );
}
