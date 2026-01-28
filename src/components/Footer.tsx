"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-10">
      {/* subtle gradient divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[rgba(var(--border-color),0.3)] to-transparent" />
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35 }}
        className="container py-8 text-sm text-[rgb(var(--text-secondary))] flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <p className="text-center sm:text-left">
          © {new Date().getFullYear()} Mohammed Abulhasan M. All rights
          reserved.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:mdyahasan18@gmail.com"
            className="inline-flex items-center gap-2 rounded-lg 
                     border border-[rgba(var(--border-color),0.5)]
                     bg-[rgba(var(--bg-secondary),0.6)]
                     px-3 py-2 text-sm
                     hover:bg-[rgba(var(--accent-primary),0.08)]
                     hover:border-[rgba(var(--accent-primary),0.3)]
                     transition-all duration-200"
          >
            <Mail className="h-4 w-4" />
            Email
          </a>
          <a
            href="tel:+918870948248"
            className="inline-flex items-center gap-2 rounded-lg 
                     border border-[rgba(var(--border-color),0.5)]
                     bg-[rgba(var(--bg-secondary),0.6)]
                     px-3 py-2 text-sm
                     hover:bg-[rgba(var(--accent-primary),0.08)]
                     hover:border-[rgba(var(--accent-primary),0.3)]
                     transition-all duration-200"
          >
            <Phone className="h-4 w-4" />
            Call
          </a>
          <a
            href="https://www.linkedin.com/in/mohammed-abulhasan-256767235/"
            target="_blank"
            rel="noreferrer"
            className="btn-accent inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-white 
                     hover:scale-105 transition-transform duration-200"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
        </div>
      </motion.div>
    </footer>
  );
}
