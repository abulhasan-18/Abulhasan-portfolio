"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail, Phone, Github } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Footer() {
  return (
    <footer className="mt-12 sm:mt-16">
      {/* subtle gradient divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[rgba(var(--border-color),0.4)] to-transparent" />
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 text-xs sm:text-sm text-[rgb(var(--text-secondary))] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
      >
        <p>
          © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="inline-flex items-center gap-1.5 rounded-lg 
                     border border-[rgba(var(--border-color),0.5)]
                     bg-[rgba(var(--bg-secondary),0.6)]
                     px-2.5 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-medium
                     hover:bg-[rgba(var(--accent-primary),0.08)]
                     hover:border-[rgba(var(--accent-primary),0.3)]
                     transition-all duration-200"
          >
            <Mail className="h-3.5 w-3.5 text-[rgb(var(--accent-primary))]" />
            <span>Email</span>
          </a>

          <a
            href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, "")}`}
            className="inline-flex items-center gap-1.5 rounded-lg 
                     border border-[rgba(var(--border-color),0.5)]
                     bg-[rgba(var(--bg-secondary),0.6)]
                     px-2.5 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-medium
                     hover:bg-[rgba(var(--accent-primary),0.08)]
                     hover:border-[rgba(var(--accent-primary),0.3)]
                     transition-all duration-200"
          >
            <Phone className="h-3.5 w-3.5 text-[rgb(var(--accent-primary))]" />
            <span>Call</span>
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className="btn-accent inline-flex items-center gap-1.5 rounded-lg px-2.5 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-white 
                     hover:scale-105 transition-transform duration-200"
          >
            <Linkedin className="h-3.5 w-3.5" />
            <span>LinkedIn</span>
          </a>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg 
                     border border-[rgba(var(--border-color),0.5)]
                     bg-[rgba(var(--bg-secondary),0.6)]
                     px-2.5 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-medium
                     hover:bg-[rgba(var(--accent-primary),0.08)]
                     hover:border-[rgba(var(--accent-primary),0.3)]
                     transition-all duration-200"
          >
            <Github className="h-3.5 w-3.5" />
            <span>GitHub</span>
          </a>
        </div>
      </motion.div>
    </footer>
  );
}
