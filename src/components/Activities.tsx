"use client";

import { motion } from "framer-motion";
import { HeartHandshake, ExternalLink, Mail, Github, Linkedin, Sparkles } from "lucide-react";
import { ACTIVITIES, PERSONAL_INFO } from "@/data/portfolioData";

export default function Activities() {
  return (
    <section id="activities" className="py-10 sm:py-16 md:py-20">
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 px-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold 
                      bg-[rgba(var(--accent-primary),0.1)] text-[rgb(var(--accent-primary))] 
                      border border-[rgba(var(--accent-primary),0.2)] mb-3">
          <HeartHandshake className="h-3.5 w-3.5" />
          <span>Community & Initiatives</span>
        </div>
        <h2 className="text-xl sm:text-3xl font-bold text-[rgb(var(--text-primary))]">
          Leadership & Extracurriculars
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="card max-w-4xl mx-auto p-4 sm:p-6 md:p-8"
      >
        <ul className="space-y-2.5 sm:space-y-3 text-[rgb(var(--text-secondary))]">
          {ACTIVITIES.map((a, idx) => (
            <li key={idx} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm leading-relaxed">
              <Sparkles className="mt-0.5 sm:mt-1 h-3.5 w-3.5 sm:h-4 sm:w-4 text-[rgb(var(--accent-primary))] shrink-0" />
              <span>{a}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-[rgba(var(--border-color),0.4)] grid grid-cols-1 sm:flex sm:flex-wrap items-center gap-2.5 sm:gap-3">
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl 
                     border border-[rgba(var(--border-color),0.6)]
                     bg-[rgba(var(--bg-secondary),0.7)]
                     px-4 py-2.5 text-xs sm:text-sm font-medium
                     text-[rgb(var(--text-primary))]
                     hover:bg-[rgba(var(--accent-primary),0.08)]
                     hover:border-[rgba(var(--accent-primary),0.3)]
                     transition-all duration-200"
          >
            <Linkedin className="h-4 w-4 text-[rgb(var(--accent-primary))] shrink-0" />
            <span>LinkedIn Profile</span>
            <ExternalLink className="h-3 w-3 sm:h-3.5 sm:w-3.5 opacity-70 shrink-0" />
          </a>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl 
                     border border-[rgba(var(--border-color),0.6)]
                     bg-[rgba(var(--bg-secondary),0.7)]
                     px-4 py-2.5 text-xs sm:text-sm font-medium
                     text-[rgb(var(--text-primary))]
                     hover:bg-[rgba(var(--accent-primary),0.08)]
                     hover:border-[rgba(var(--accent-primary),0.3)]
                     transition-all duration-200"
          >
            <Github className="h-4 w-4 shrink-0" />
            <span>GitHub Repositories</span>
            <ExternalLink className="h-3 w-3 sm:h-3.5 sm:w-3.5 opacity-70 shrink-0" />
          </a>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="btn-accent inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-medium text-white 
                     hover:scale-105 transition-transform duration-200 shadow-sm"
          >
            <Mail className="h-4 w-4 shrink-0" />
            <span>Get in Touch</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
