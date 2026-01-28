"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="group relative inline-flex items-center gap-2 rounded-xl 
               border border-[rgba(var(--border-color),0.5)]
               bg-[rgba(var(--bg-secondary),0.6)]
               px-3.5 py-2 
               hover:bg-[rgba(var(--accent-primary),0.08)]
               hover:border-[rgba(var(--accent-primary),0.3)]
               hover:shadow-md
               transition-all duration-200
               backdrop-blur-sm"
    >
      {isDark ? (
        <Sun className="h-4 w-4 text-[rgb(var(--accent-primary))] 
                       group-hover:rotate-45 transition-transform duration-300" />
      ) : (
        <Moon className="h-4 w-4 text-[rgb(var(--accent-primary))] 
                        group-hover:-rotate-12 transition-transform duration-300" />
      )}
      <span className="text-sm font-medium hidden sm:inline text-[rgb(var(--text-primary))]">
        {isDark ? "Light" : "Dark"}
      </span>
    </button>
  );
}
