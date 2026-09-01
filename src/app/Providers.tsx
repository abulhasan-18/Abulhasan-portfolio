"use client";

import { ThemeProvider } from "@/context/ThemeContext";
import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
