"use client";

import { Mail, Phone, Linkedin, ArrowRight, BadgeCheck, Github, MapPin, Sparkles } from "lucide-react";
import Balancer from "react-wrap-balancer";
import { motion, AnimatePresence } from "framer-motion";
import { useRole } from "@/context/RoleContext";
import { PERSONAL_INFO } from "@/data/portfolioData";
import RoleSwitcher from "./RoleSwitcher";

export default function Hero() {
  const { activeRole, roleConfig } = useRole();

  return (
    <section className="relative py-12 md:py-18">
      {/* Subtle background glow */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 h-96 w-96 md:h-[420px] md:w-[420px] 
                   -translate-x-1/2 rounded-full 
                   bg-[radial-gradient(circle,rgba(var(--accent-primary),0.12)_0%,transparent_70%)]
                   blur-3xl"
      />

      {/* Role Selection Switcher */}
      <RoleSwitcher />

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="card mx-auto max-w-4xl p-6 sm:p-10 md:p-12 text-center relative overflow-hidden mt-4"
      >
        {/* Active persona indicator chip */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold 
                      bg-[rgba(var(--accent-primary),0.1)] text-[rgb(var(--accent-primary))] 
                      border border-[rgba(var(--accent-primary),0.25)] mb-4">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Active Persona: {roleConfig.shortLabel}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[rgb(var(--text-primary))] tracking-tight">
          <Balancer>{PERSONAL_INFO.name}</Balancer>
        </h1>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeRole}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
            className="space-y-3 mt-3"
          >
            <p className="text-base sm:text-lg md:text-xl font-medium text-[rgb(var(--accent-primary))] flex items-center justify-center gap-2">
              <span>{roleConfig.badge}</span>
              <BadgeCheck className="h-5 w-5 text-[rgb(var(--accent-primary))] inline-block" />
            </p>

            <p className="text-xs sm:text-sm text-[rgb(var(--text-secondary))] font-medium max-w-2xl mx-auto opacity-90">
              {roleConfig.tagline}
            </p>

            {/* Highlights pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
              {roleConfig.highlights.map((h) => (
                <span
                  key={h}
                  className="text-xs rounded-lg px-2.5 py-1 
                           bg-[rgba(var(--bg-primary),0.8)] 
                           border border-[rgba(var(--border-color),0.6)]
                           text-[rgb(var(--text-primary))]"
                >
                  ✓ {h}
                </span>
              ))}
            </div>

            {/* Summary paragraph */}
            <p className="mt-5 text-sm sm:text-base text-[rgb(var(--text-secondary))] leading-relaxed max-w-3xl mx-auto text-justify sm:text-center">
              {roleConfig.heroAbout}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Location & availability */}
        <div className="mt-5 flex items-center justify-center gap-1.5 text-xs text-[rgb(var(--text-secondary))] opacity-80">
          <MapPin className="h-3.5 w-3.5 text-[rgb(var(--accent-primary))]" />
          <span>{PERSONAL_INFO.location}</span>
        </div>

        {/* CTA Contact Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="btn-accent inline-flex items-center gap-2 rounded-xl px-5 py-2.5 
                     font-medium text-white hover:scale-105 transition-transform duration-200 text-sm shadow-md"
          >
            <Mail className="h-4 w-4" /> Email Me
          </a>

          <a
            href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, "")}`}
            className="inline-flex items-center gap-2 rounded-xl 
                     border border-[rgba(var(--border-color),0.6)]
                     bg-[rgba(var(--bg-secondary),0.7)]
                     px-4 py-2.5 font-medium text-sm
                     text-[rgb(var(--text-primary))]
                     hover:bg-[rgba(var(--accent-primary),0.08)]
                     hover:border-[rgba(var(--accent-primary),0.3)]
                     transition-all duration-200"
          >
            <Phone className="h-4 w-4 text-[rgb(var(--accent-primary))]" /> {PERSONAL_INFO.phone}
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl 
                     border border-[rgba(var(--border-color),0.6)]
                     bg-[rgba(var(--bg-secondary),0.7)]
                     px-4 py-2.5 font-medium text-sm
                     text-[rgb(var(--text-primary))]
                     hover:bg-[rgba(var(--accent-primary),0.08)]
                     hover:border-[rgba(var(--accent-primary),0.3)]
                     transition-all duration-200 group"
          >
            <Linkedin className="h-4 w-4 text-[rgb(var(--accent-primary))]" /> LinkedIn
            <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl 
                     border border-[rgba(var(--border-color),0.6)]
                     bg-[rgba(var(--bg-secondary),0.7)]
                     px-4 py-2.5 font-medium text-sm
                     text-[rgb(var(--text-primary))]
                     hover:bg-[rgba(var(--accent-primary),0.08)]
                     hover:border-[rgba(var(--accent-primary),0.3)]
                     transition-all duration-200"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
}
