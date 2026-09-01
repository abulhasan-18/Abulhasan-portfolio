"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="h-9 w-20 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80" />
    );
  }

  const currentTheme = resolvedTheme || theme;
  const isDark = currentTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      type="button"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      onClick={toggleTheme}
      className="group relative inline-flex items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 px-3 sm:px-3.5 py-1.5 sm:py-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200 shadow-2xs backdrop-blur-sm cursor-pointer"
    >
      {isDark ? (
        <Sun className="h-4 w-4 text-amber-400 group-hover:rotate-45 transition-transform duration-300" />
      ) : (
        <Moon className="h-4 w-4 text-blue-600 group-hover:-rotate-12 transition-transform duration-300" />
      )}
      <span className="text-xs sm:text-sm font-medium hidden sm:inline text-slate-700 dark:text-slate-200">
        {isDark ? "Light" : "Dark"}
      </span>
    </button>
  );
}
