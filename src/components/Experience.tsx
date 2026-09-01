"use client";

import { motion } from "framer-motion";
import { Briefcase, Building2, Calendar, CheckCircle2 } from "lucide-react";
import { WORK_EXPERIENCE } from "@/data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="py-10 sm:py-16 md:py-20">
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 px-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold 
                      bg-[rgba(var(--accent-primary),0.1)] text-[rgb(var(--accent-primary))] 
                      border border-[rgba(var(--accent-primary),0.2)] mb-3">
          <Briefcase className="h-3.5 w-3.5" />
          <span>Professional History</span>
        </div>
        <h2 className="text-xl sm:text-3xl font-bold text-[rgb(var(--text-primary))]">
          Work Experience
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-[rgb(var(--text-secondary))]">
          2+ years of engineering production applications, modeling dimensional telemetry, and driving business decisions at CloudPixels
        </p>
      </div>

      <div className="space-y-5 sm:space-y-6 max-w-4xl mx-auto">
        {WORK_EXPERIENCE.map((exp, i) => (
          <motion.article
            key={`${exp.role}-${exp.period}`}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className="card p-4 sm:p-6 md:p-8"
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2.5 sm:gap-4 border-b border-[rgba(var(--border-color),0.4)] pb-4">
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-[rgb(var(--text-primary))] flex items-center gap-2">
                  {exp.role}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-[rgb(var(--accent-primary))] flex items-center gap-1.5 mt-1">
                  <Building2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
                  <span>{exp.company}</span>
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[rgba(var(--bg-primary),0.8)] border border-[rgba(var(--border-color),0.6)] text-[rgb(var(--text-secondary))] font-medium">
                  <Calendar className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[rgb(var(--accent-primary))] shrink-0" />
                  <span>{exp.period}</span>
                </span>
                <span className="px-2.5 py-1 rounded-full bg-[rgba(var(--accent-primary),0.1)] text-[rgb(var(--accent-primary))] font-semibold">
                  {exp.duration}
                </span>
              </div>
            </div>

            {exp.summary && (
              <p className="mt-3 sm:mt-4 text-xs sm:text-sm font-medium text-[rgb(var(--text-primary))] opacity-90 leading-relaxed">
                {exp.summary}
              </p>
            )}

            <ul className="mt-3.5 sm:mt-4 space-y-2 sm:space-y-2.5">
              {exp.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[rgb(var(--text-secondary))]">
                  <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[rgb(var(--accent-primary))] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>

            {exp.skills && exp.skills.length > 0 && (
              <div className="mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-[rgba(var(--border-color),0.3)] flex flex-wrap items-center gap-1.5 sm:gap-2">
                <span className="text-[11px] sm:text-xs font-semibold text-[rgb(var(--text-secondary))] mr-1">
                  Key Competencies:
                </span>
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[11px] sm:text-xs px-2 sm:px-2.5 py-0.5 rounded-md bg-[rgba(var(--accent-primary),0.07)] 
                             border border-[rgba(var(--accent-primary),0.2)] text-[rgb(var(--text-primary))]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </motion.article>
        ))}
      </div>
    </section>
  );
}
