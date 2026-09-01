"use client";

import { motion } from "framer-motion";
import { HeartHandshake, ExternalLink, Mail, Github, Linkedin, Sparkles } from "lucide-react";
import { ACTIVITIES, PERSONAL_INFO } from "@/data/portfolioData";

export default function Activities() {
  return (
    <section id="activities" className="py-10 sm:py-16 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 px-2"
      >
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 dark:bg-sky-950/60 dark:text-sky-300 border border-blue-200 dark:border-sky-800/60 mb-3 shadow-xs">
          <HeartHandshake className="h-3.5 w-3.5" />
          <span>Community &amp; Initiatives</span>
        </div>
        <h2 className="text-xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
          Leadership &amp; Extracurriculars
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="card max-w-4xl mx-auto p-4 sm:p-6 md:p-8"
      >
        <ul className="space-y-2.5 sm:space-y-3 text-slate-600 dark:text-slate-300">
          {ACTIVITIES.map((a, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
              className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm leading-relaxed group"
            >
              <Sparkles className="mt-0.5 sm:mt-1 h-3.5 w-3.5 sm:h-4 sm:w-4 text-blue-600 dark:text-sky-400 shrink-0 group-hover:rotate-45 group-hover:scale-125 transition-transform duration-300" />
              <span>{a}</span>
            </motion.li>
          ))}
        </ul>

        <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-slate-200/80 dark:border-slate-800/80 grid grid-cols-1 sm:flex sm:flex-wrap items-center gap-2.5 sm:gap-3">
          <motion.a
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-800/90 px-4 py-2.5 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-700/80 hover:border-blue-300 dark:hover:border-sky-500/50 transition-all duration-200 shadow-2xs group"
          >
            <Linkedin className="h-4 w-4 text-blue-600 dark:text-sky-400 shrink-0" />
            <span>LinkedIn Profile</span>
            <ExternalLink className="h-3 w-3 sm:h-3.5 sm:w-3.5 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-800/90 px-4 py-2.5 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-700/80 hover:border-blue-300 dark:hover:border-sky-500/50 transition-all duration-200 shadow-2xs group"
          >
            <Github className="h-4 w-4 shrink-0" />
            <span>GitHub Repositories</span>
            <ExternalLink className="h-3 w-3 sm:h-3.5 sm:w-3.5 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            href={`mailto:${PERSONAL_INFO.email}`}
            className="btn-accent inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-medium text-white shadow-sm"
          >
            <Mail className="h-4 w-4 shrink-0" />
            <span>Get in Touch</span>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
