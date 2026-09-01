"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, CheckCircle } from "lucide-react";
import { EDUCATION, CERTIFICATIONS } from "@/data/portfolioData";

export default function Education() {
  return (
    <section id="education" className="py-10 sm:py-16 md:py-20">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 px-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold 
                      bg-[rgba(var(--accent-primary),0.1)] text-[rgb(var(--accent-primary))] 
                      border border-[rgba(var(--accent-primary),0.2)] mb-3">
          <GraduationCap className="h-3.5 w-3.5" />
          <span>Qualifications & Credentials</span>
        </div>
        <h2 className="text-xl sm:text-3xl font-bold text-[rgb(var(--text-primary))]">
          Education & Certifications
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-[rgb(var(--text-secondary))]">
          Formal academic foundation and specialized industry certifications in Software Engineering, Data, and Business Analysis
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
        {/* Academic Degrees */}
        <div className="space-y-4 sm:space-y-5">
          <h3 className="text-base sm:text-lg font-bold text-[rgb(var(--text-primary))] flex items-center gap-2">
            <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5 text-[rgb(var(--accent-primary))]" />
            <span>Academic Background</span>
          </h3>

          <div className="space-y-3.5 sm:space-y-4">
            {EDUCATION.map((edu, i) => (
              <motion.article
                key={edu.degree}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.35 }}
                className="card p-4 sm:p-5 hover:-translate-y-0.5 transition-transform"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 sm:gap-2">
                  <h4 className="font-bold text-sm sm:text-base text-[rgb(var(--text-primary))]">
                    {edu.degree}
                  </h4>
                  <span className="text-[11px] sm:text-xs px-2 py-0.5 rounded-full bg-[rgba(var(--bg-primary),0.9)] text-[rgb(var(--text-secondary))] shrink-0 font-medium self-start">
                    {edu.period}
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-medium text-[rgb(var(--accent-primary))] mt-1">
                  {edu.institution}
                </p>
                <p className="text-[11px] sm:text-xs text-[rgb(var(--text-secondary))] font-medium mt-0.5">
                  {edu.status}
                </p>
                <p className="mt-2 text-xs text-[rgb(var(--text-secondary))] opacity-90 leading-relaxed">
                  {edu.details}
                </p>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Professional Certifications */}
        <div className="space-y-4 sm:space-y-5">
          <h3 className="text-base sm:text-lg font-bold text-[rgb(var(--text-primary))] flex items-center gap-2">
            <Award className="h-4 w-4 sm:h-5 sm:w-5 text-[rgb(var(--accent-primary))]" />
            <span>Industry Certifications</span>
          </h3>

          <div className="space-y-3 sm:space-y-3.5">
            {CERTIFICATIONS.map((cert, i) => (
              <motion.article
                key={cert.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.35 }}
                className="card p-3.5 sm:p-4 hover:-translate-y-0.5 transition-transform"
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                    <div className="rounded-lg bg-[rgba(var(--accent-primary),0.1)] p-1.5 sm:p-2 shrink-0">
                      <CheckCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[rgb(var(--accent-primary))]" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-semibold text-xs sm:text-sm text-[rgb(var(--text-primary))] truncate">
                        {cert.title}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-[rgb(var(--accent-primary))] font-medium">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                  <span className="text-[11px] sm:text-xs px-2 py-0.5 rounded-md bg-[rgba(var(--bg-primary),0.8)] border border-[rgba(var(--border-color),0.5)] text-[rgb(var(--text-secondary))] shrink-0 font-medium">
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
