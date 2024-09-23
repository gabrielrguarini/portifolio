"use client";
import { Moon, Sun } from "lucide-react";

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
      className="fixed bottom-2 right-2 rounded-full border-2 border-black bg-white p-2 dark:bg-dark-secondary dark:text-white-primary"
      aria-label="Mudar tema"
    >
      {isDark ? <Sun /> : <Moon />}
    </button>
  );
}
