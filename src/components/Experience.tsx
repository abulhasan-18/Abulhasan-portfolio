"use client";

import { motion } from "framer-motion";
import { Briefcase, Building2, Calendar, CheckCircle2 } from "lucide-react";
import { WORK_EXPERIENCE } from "@/data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="py-10 sm:py-16 md:py-20">
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 px-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 dark:bg-sky-950/60 dark:text-sky-300 border border-blue-200 dark:border-sky-800/60 mb-3 shadow-xs">
          <Briefcase className="h-3.5 w-3.5" />
          <span>Professional History</span>
        </div>
        <h2 className="text-xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
          Work Experience
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
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
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2.5 sm:gap-4 border-b border-slate-200/80 dark:border-slate-800/80 pb-4">
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  {exp.role}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-blue-600 dark:text-sky-400 flex items-center gap-1.5 mt-1">
                  <Building2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
                  <span>{exp.company}</span>
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium">
                  <Calendar className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-blue-600 dark:text-sky-400 shrink-0" />
                  <span>{exp.period}</span>
                </span>
                <span className="px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 dark:bg-sky-950/60 dark:text-sky-300 border border-blue-200/60 dark:border-sky-800/60 font-semibold">
                  {exp.duration}
                </span>
              </div>
            </div>

            {exp.summary && (
              <p className="mt-3 sm:mt-4 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
                {exp.summary}
              </p>
            )}

            <ul className="mt-3.5 sm:mt-4 space-y-2 sm:space-y-2.5">
              {exp.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-blue-600 dark:text-sky-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>

            {exp.skills && exp.skills.length > 0 && (
              <div className="mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-wrap items-center gap-1.5 sm:gap-2">
                <span className="text-[11px] sm:text-xs font-semibold text-slate-500 dark:text-slate-400 mr-1">
                  Key Competencies:
                </span>
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[11px] sm:text-xs px-2 sm:px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200"
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
