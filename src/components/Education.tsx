"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, CheckCircle } from "lucide-react";
import { useRole } from "@/context/RoleContext";
import { EDUCATION, CERTIFICATIONS } from "@/data/portfolioData";

export default function Education() {
  const { activeRole } = useRole();

  return (
    <section id="education" className="py-14 md:py-20">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold 
                      bg-[rgba(var(--accent-primary),0.1)] text-[rgb(var(--accent-primary))] 
                      border border-[rgba(var(--accent-primary),0.2)] mb-3">
          <GraduationCap className="h-3.5 w-3.5" />
          <span>Qualifications & Credentials</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-[rgb(var(--text-primary))]">
          Education & Certifications
        </h2>
        <p className="mt-2 text-sm text-[rgb(var(--text-secondary))]">
          Formal academic foundation and specialized industry certifications
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto">
        {/* Academic Degrees */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-[rgb(var(--text-primary))] flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-[rgb(var(--accent-primary))]" />
            <span>Academic Background</span>
          </h3>

          <div className="space-y-4">
            {EDUCATION.map((edu, i) => (
              <motion.article
                key={edu.degree}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="card p-5 hover:-translate-y-0.5 transition-transform"
              >
                <div className="flex items-start justify-between gap-2">
                  <h4 className="font-bold text-base text-[rgb(var(--text-primary))]">
                    {edu.degree}
                  </h4>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-[rgba(var(--bg-primary),0.9)] text-[rgb(var(--text-secondary))] shrink-0 font-medium">
                    {edu.period}
                  </span>
                </div>
                <p className="text-sm font-medium text-[rgb(var(--accent-primary))] mt-1">
                  {edu.institution}
                </p>
                <p className="text-xs text-[rgb(var(--text-secondary))] font-medium mt-1">
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
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-[rgb(var(--text-primary))] flex items-center gap-2">
            <Award className="h-5 w-5 text-[rgb(var(--accent-primary))]" />
            <span>Industry Certifications</span>
          </h3>

          <div className="space-y-4">
            {CERTIFICATIONS.map((cert, i) => {
              const isRelevant =
                activeRole === "all" || cert.roles.includes(activeRole);

              return (
                <motion.article
                  key={cert.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className={`card p-4.5 transition-all ${
                    isRelevant
                      ? "border-[rgba(var(--accent-primary),0.4)]"
                      : "opacity-75"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-start gap-3">
                      <div className="rounded-lg bg-[rgba(var(--accent-primary),0.1)] p-2 mt-0.5 shrink-0">
                        <CheckCircle className="h-4 w-4 text-[rgb(var(--accent-primary))]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-[rgb(var(--text-primary))]">
                          {cert.title}
                        </h4>
                        <p className="text-xs text-[rgb(var(--accent-primary))] font-medium mt-0.5">
                          {cert.issuer}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs px-2 py-0.5 rounded-md bg-[rgba(var(--bg-primary),0.8)] border border-[rgba(var(--border-color),0.5)] text-[rgb(var(--text-secondary))] shrink-0">
                      {cert.year}
                    </span>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
