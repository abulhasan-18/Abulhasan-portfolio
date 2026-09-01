"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, CheckCircle } from "lucide-react";
import { EDUCATION, CERTIFICATIONS } from "@/data/portfolioData";

export default function Education() {
  return (
    <section id="education" className="py-10 sm:py-16 md:py-20">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 px-2"
      >
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 dark:bg-sky-950/60 dark:text-sky-300 border border-blue-200 dark:border-sky-800/60 mb-3 shadow-xs">
          <GraduationCap className="h-3.5 w-3.5" />
          <span>Qualifications &amp; Credentials</span>
        </div>
        <h2 className="text-xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
          Education &amp; Certifications
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
          Formal academic foundation and specialized industry certifications in Software Engineering, Data, and Business Analysis
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
        {/* Academic Degrees */}
        <div className="space-y-4 sm:space-y-5">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 dark:text-sky-400" />
            <span>Academic Background</span>
          </h3>

          <div className="space-y-3.5 sm:space-y-4">
            {EDUCATION.map((edu, i) => (
              <motion.article
                key={edu.degree}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ delay: i * 0.1, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -3 }}
                className="card p-4 sm:p-5 group"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 sm:gap-2">
                  <h4 className="font-bold text-sm sm:text-base text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors">
                    {edu.degree}
                  </h4>
                  <span className="text-[11px] sm:text-xs px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 shrink-0 font-medium self-start shadow-2xs">
                    {edu.period}
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-medium text-blue-600 dark:text-sky-400 mt-1">
                  {edu.institution}
                </p>
                <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                  {edu.status}
                </p>
                <p className="mt-2 text-xs text-slate-600 dark:text-slate-300 opacity-90 leading-relaxed">
                  {edu.details}
                </p>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Professional Certifications */}
        <div className="space-y-4 sm:space-y-5">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Award className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 dark:text-sky-400" />
            <span>Industry Certifications</span>
          </h3>

          <div className="space-y-3 sm:space-y-3.5">
            {CERTIFICATIONS.map((cert, i) => (
              <motion.article
                key={cert.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ delay: i * 0.08, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -3, scale: 1.01 }}
                className="card p-3.5 sm:p-4 group"
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                    <div className="rounded-lg bg-blue-50 dark:bg-sky-950/80 p-1.5 sm:p-2 shrink-0 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-sky-500 dark:group-hover:text-slate-950 transition-all duration-200">
                      <CheckCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-blue-600 dark:text-sky-400 group-hover:text-inherit" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-semibold text-xs sm:text-sm text-slate-900 dark:text-slate-100 truncate group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-blue-600 dark:text-sky-400 font-medium">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                  <span className="text-[11px] sm:text-xs px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 shrink-0 font-medium shadow-2xs">
                    {cert.year}
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
