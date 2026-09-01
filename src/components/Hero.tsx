"use client";

import { Mail, Phone, Linkedin, ArrowRight, BadgeCheck, Github, MapPin } from "lucide-react";
import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Hero() {
  return (
    <section className="relative py-8 sm:py-14 md:py-20 overflow-hidden">
      {/* Subtle Background glow */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 sm:h-96 sm:w-96 md:h-[450px] md:w-[450px] -translate-x-1/2 rounded-full bg-blue-500/10 dark:bg-sky-500/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="card mx-auto max-w-4xl p-4 sm:p-8 md:p-12 text-center relative overflow-hidden"
      >
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-slate-900 dark:text-slate-100 tracking-tight">
          <Balancer>{PERSONAL_INFO.name}</Balancer>
        </h1>

        <div className="space-y-3 mt-3">
          <p className="text-sm sm:text-lg md:text-xl font-semibold text-blue-600 dark:text-sky-400 flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap">
            <span>{PERSONAL_INFO.title}</span>
            <BadgeCheck className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 dark:text-sky-400 inline-block shrink-0" />
          </p>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium max-w-2xl mx-auto leading-normal px-1">
            {PERSONAL_INFO.tagline}
          </p>

          {/* Key Highlights Chips */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 pt-2">
            {PERSONAL_INFO.keyHighlights.map((highlight) => (
              <span
                key={highlight}
                className="text-[11px] sm:text-xs font-medium rounded-lg px-2.5 py-1 bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200"
              >
                ✓ {highlight}
              </span>
            ))}
          </div>

          {/* Summary Paragraph */}
          <p className="mt-4 sm:mt-5 text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto text-left sm:text-center px-1 sm:px-2">
            {PERSONAL_INFO.summary}
          </p>
        </div>

        {/* Location */}
        <div className="mt-4 sm:mt-5 flex items-center justify-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
          <MapPin className="h-3.5 w-3.5 text-blue-600 dark:text-sky-400 shrink-0" />
          <span>{PERSONAL_INFO.location}</span>
        </div>

        {/* CTA Contact Buttons */}
        <div className="mt-6 sm:mt-8 grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-2.5 sm:gap-3.5">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="btn-accent inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl px-4 sm:px-5 py-2 sm:py-2.5 font-medium text-white hover:scale-105 transition-transform duration-200 text-xs sm:text-sm shadow-md"
          >
            <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
            <span>Email Me</span>
          </a>

          <a
            href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, "")}`}
            className="inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-800/90 px-3 sm:px-4 py-2 sm:py-2.5 font-medium text-xs sm:text-sm text-slate-800 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-700/80 transition-all duration-200"
          >
            <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-blue-600 dark:text-sky-400 shrink-0" />
            <span className="truncate">{PERSONAL_INFO.phone}</span>
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-800/90 px-3 sm:px-4 py-2 sm:py-2.5 font-medium text-xs sm:text-sm text-slate-800 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-700/80 transition-all duration-200 group"
          >
            <Linkedin className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-blue-600 dark:text-sky-400 shrink-0" />
            <span>LinkedIn</span>
            <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 group-hover:translate-x-1 transition-transform shrink-0" />
          </a>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-800/90 px-3 sm:px-4 py-2 sm:py-2.5 font-medium text-xs sm:text-sm text-slate-800 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-700/80 transition-all duration-200"
          >
            <Github className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
            <span>GitHub</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
