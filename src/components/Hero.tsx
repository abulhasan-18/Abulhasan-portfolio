"use client";

import { Mail, Phone, Linkedin, ArrowRight, BadgeCheck, Github, MapPin } from "lucide-react";
import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Hero() {
  return (
    <section className="relative py-10 sm:py-16 md:py-24 overflow-hidden">
      {/* Animated Floating Ambient Background Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.55, 0.35],
          x: [-20, 20, -20],
          y: [-10, 15, -10],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -top-24 left-1/3 h-80 w-80 sm:h-96 sm:w-96 rounded-full bg-gradient-to-tr from-blue-500/20 to-indigo-500/15 blur-3xl dark:from-sky-500/15 dark:to-indigo-500/10"
      />
      <motion.div
        animate={{
          scale: [1.1, 0.95, 1.1],
          opacity: [0.25, 0.45, 0.25],
          x: [20, -20, 20],
          y: [15, -10, 15],
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute top-12 right-1/4 h-72 w-72 sm:h-88 sm:w-88 rounded-full bg-gradient-to-br from-indigo-500/15 to-sky-400/20 blur-3xl dark:from-sky-400/10 dark:to-indigo-600/15"
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="card mx-auto max-w-4xl p-5 sm:p-8 md:p-12 text-center relative overflow-hidden"
      >
        {/* Floating status pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 dark:bg-sky-950/60 dark:text-sky-300 border border-blue-200/80 dark:border-sky-800/60 mb-3 shadow-xs"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600 dark:bg-sky-400"></span>
          </span>
          <span>Available for Roles &amp; Consulting</span>
        </motion.div>

        {/* Main Name */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-2xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-slate-900 dark:text-slate-100 tracking-tight"
        >
          <Balancer>{PERSONAL_INFO.name}</Balancer>
        </motion.h1>

        <div className="space-y-3 mt-3">
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.45 }}
            className="text-sm sm:text-lg md:text-xl font-semibold text-blue-600 dark:text-sky-400 flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap"
          >
            <span>{PERSONAL_INFO.title}</span>
            <BadgeCheck className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 dark:text-sky-400 inline-block shrink-0" />
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.45 }}
            className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium max-w-2xl mx-auto leading-normal px-1"
          >
            {PERSONAL_INFO.tagline}
          </motion.p>

          {/* Key Highlights Chips */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.45 }}
            className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 pt-2"
          >
            {PERSONAL_INFO.keyHighlights.map((highlight) => (
              <motion.span
                key={highlight}
                whileHover={{ scale: 1.05, y: -1 }}
                transition={{ duration: 0.2 }}
                className="text-[11px] sm:text-xs font-medium rounded-lg px-2.5 py-1 bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 shadow-2xs hover:border-blue-400/60 dark:hover:border-sky-500/60 transition-colors"
              >
                ✓ {highlight}
              </motion.span>
            ))}
          </motion.div>

          {/* Summary Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.45 }}
            className="mt-4 sm:mt-5 text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto text-left sm:text-center px-1 sm:px-2"
          >
            {PERSONAL_INFO.summary}
          </motion.p>
        </div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="mt-4 sm:mt-5 flex items-center justify-center gap-1.5 text-xs text-slate-500 dark:text-slate-400"
        >
          <MapPin className="h-3.5 w-3.5 text-blue-600 dark:text-sky-400 shrink-0" />
          <span>{PERSONAL_INFO.location}</span>
        </motion.div>

        {/* CTA Contact Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.45 }}
          className="mt-6 sm:mt-8 grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-2.5 sm:gap-3.5"
        >
          <motion.a
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            href={`mailto:${PERSONAL_INFO.email}`}
            className="btn-accent inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl px-4 sm:px-5 py-2.5 font-medium text-white text-xs sm:text-sm shadow-md"
          >
            <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
            <span>Email Me</span>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, "")}`}
            className="inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-800/90 px-3 sm:px-4 py-2.5 font-medium text-xs sm:text-sm text-slate-800 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-700/80 hover:border-blue-300 dark:hover:border-sky-500/50 transition-all duration-200 shadow-2xs"
          >
            <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-blue-600 dark:text-sky-400 shrink-0" />
            <span className="truncate">{PERSONAL_INFO.phone}</span>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-800/90 px-3 sm:px-4 py-2.5 font-medium text-xs sm:text-sm text-slate-800 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-700/80 hover:border-blue-300 dark:hover:border-sky-500/50 transition-all duration-200 group shadow-2xs"
          >
            <Linkedin className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-blue-600 dark:text-sky-400 shrink-0" />
            <span>LinkedIn</span>
            <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 group-hover:translate-x-1 transition-transform shrink-0" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-800/90 px-3 sm:px-4 py-2.5 font-medium text-xs sm:text-sm text-slate-800 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-700/80 hover:border-blue-300 dark:hover:border-sky-500/50 transition-all duration-200 shadow-2xs"
          >
            <Github className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
            <span>GitHub</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
