"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode, useEffect } from "react";
import { useTheme } from "next-themes";
import { RoleProvider } from "@/context/RoleContext";

function ThemeHandler() {
  const { theme } = useTheme();
  
  useEffect(() => {
    // Add 'dark' class for backward compatibility with existing Tailwind classes
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  
  return null;
}

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="data-theme"
      defaultTheme="light"
      themes={["light", "dark"]}
      enableSystem={false}
    >
      <ThemeHandler />
      <RoleProvider>{children}</RoleProvider>
    </ThemeProvider>
  );
}
