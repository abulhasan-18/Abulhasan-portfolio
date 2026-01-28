"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const nav = [
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Activities", href: "#activities" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  // Close the mobile menu on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <nav
      className="sticky top-0 z-50 border-b backdrop-blur-xl
                border-[rgba(var(--border-color),0.3)]
                bg-[rgba(var(--nav-bg),0.8)]
                shadow-lg shadow-black/5
                transition-all duration-300"
    >
      {/* Top bar */}
      <div className="container flex h-16 items-center justify-between">
        {/* Brand */}
        <motion.div
          initial={{ y: -8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex items-center gap-2"
        >
          <Link
            href="/"
            className="font-heading font-bold text-lg tracking-tight leading-none pl-2 
                     bg-gradient-to-r from-[rgb(var(--accent-primary))] to-[rgb(var(--accent-secondary))] 
                     bg-clip-text text-transparent
                     hover:opacity-80 transition-opacity"
            onClick={() => setOpen(false)}
          >
            Mohammed Abulhasan M
          </Link>
        </motion.div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {nav.map((n) => (
            <Link
              key={n.label}
              href={n.href}
              className="text-sm font-medium text-[rgb(var(--text-secondary))] 
                       hover:text-[rgb(var(--accent-primary))] 
                       transition-all duration-200
                       relative group"
            >
              <span className="relative">
                {n.label}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 
                               bg-gradient-to-r from-[rgb(var(--accent-primary))] to-[rgb(var(--accent-secondary))]
                               group-hover:w-full transition-all duration-300 rounded-full"></span>
              </span>
            </Link>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile actions */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl 
                     border border-[rgba(var(--border-color),0.3)]
                     bg-[rgba(var(--bg-secondary),0.5)]
                     hover:bg-[rgba(var(--accent-primary),0.1)]
                     hover:border-[rgba(var(--accent-primary),0.4)]
                     transition-all duration-200"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            key="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-[rgba(var(--border-color),0.3)] 
                     bg-[rgba(var(--nav-bg),0.95)] backdrop-blur-xl"
          >
            <ul className="container py-2 space-y-1">
              {nav.map((n) => (
                <li key={n.label}>
                  <Link
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 rounded-xl text-base font-medium
                             text-[rgb(var(--text-secondary))]
                             hover:text-[rgb(var(--accent-primary))]
                             hover:bg-[rgba(var(--accent-primary),0.08)]
                             transition-all duration-200"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
