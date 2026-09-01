"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Building2, Calendar, CheckCircle2 } from "lucide-react";
import { useRole } from "@/context/RoleContext";
import { WORK_EXPERIENCES, ROLES } from "@/data/portfolioData";

export default function Experience() {
  const { activeRole } = useRole();
  const experiences = WORK_EXPERIENCES[activeRole] || WORK_EXPERIENCES.all;

  return (
    <section id="experience" className="py-14 md:py-20">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold 
                      bg-[rgba(var(--accent-primary),0.1)] text-[rgb(var(--accent-primary))] 
                      border border-[rgba(var(--accent-primary),0.2)] mb-3">
          <Briefcase className="h-3.5 w-3.5" />
          <span>Professional History</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-[rgb(var(--text-primary))]">
          Work Experience
        </h2>
        <p className="mt-2 text-sm text-[rgb(var(--text-secondary))]">
          Showing role-tailored contributions for{" "}
          <span className="font-semibold text-[rgb(var(--accent-primary))]">
            {ROLES[activeRole].shortLabel}
          </span>
        </p>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeRole}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="space-y-6 max-w-4xl mx-auto"
        >
          {experiences.map((exp, i) => (
            <motion.article
              key={`${exp.role}-${exp.period}`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="card p-6 md:p-8"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-[rgba(var(--border-color),0.4)] pb-4">
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-[rgb(var(--text-primary))] flex items-center gap-2">
                    {exp.role}
                  </h3>
                  <p className="text-sm font-medium text-[rgb(var(--accent-primary))] flex items-center gap-1.5 mt-1">
                    <Building2 className="h-4 w-4" />
                    <span>{exp.company}</span>
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[rgba(var(--bg-primary),0.8)] border border-[rgba(var(--border-color),0.6)] text-[rgb(var(--text-secondary))] font-medium">
                    <Calendar className="h-3.5 w-3.5 text-[rgb(var(--accent-primary))]" />
                    {exp.period}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-[rgba(var(--accent-primary),0.1)] text-[rgb(var(--accent-primary))] font-semibold">
                    {exp.duration}
                  </span>
                </div>
              </div>

              {exp.summary && (
                <p className="mt-4 text-sm font-medium text-[rgb(var(--text-primary))] opacity-90 leading-relaxed">
                  {exp.summary}
                </p>
              )}

              <ul className="mt-4 space-y-2.5">
                {exp.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-[rgb(var(--text-secondary))]">
                    <CheckCircle2 className="h-4 w-4 text-[rgb(var(--accent-primary))] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>

              {exp.skills && exp.skills.length > 0 && (
                <div className="mt-5 pt-4 border-t border-[rgba(var(--border-color),0.3)] flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold text-[rgb(var(--text-secondary))] mr-1">
                    Key Competencies:
                  </span>
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2.5 py-0.5 rounded-md bg-[rgba(var(--accent-primary),0.07)] 
                               border border-[rgba(var(--accent-primary),0.2)] text-[rgb(var(--text-primary))]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </motion.article>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
