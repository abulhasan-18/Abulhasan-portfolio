"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Layers,
  Smartphone,
  Cloud,
  Cpu,
  BarChart3,
  FileSpreadsheet,
  Workflow,
  CheckCircle2,
  Server,
  Layers3,
} from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";

const iconMap = {
  Code2,
  Database,
  Layers,
  Smartphone,
  Cloud,
  Cpu,
  BarChart3,
  FileSpreadsheet,
  Workflow,
  CheckCircle2,
  Server,
};

export default function Skills() {
  return (
    <section id="skills" className="py-10 sm:py-16 md:py-20">
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 px-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold 
                      bg-[rgba(var(--accent-primary),0.1)] text-[rgb(var(--accent-primary))] 
                      border border-[rgba(var(--accent-primary),0.2)] mb-3">
          <Layers3 className="h-3.5 w-3.5" />
          <span>Technical & Analytical Toolkit</span>
        </div>
        <h2 className="text-xl sm:text-3xl font-bold text-[rgb(var(--text-primary))]">
          Skills & Competencies
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-[rgb(var(--text-secondary))]">
          Bridging full-stack software development, SQL star schema data modeling, business intelligence, and requirements engineering
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {SKILL_CATEGORIES.map((cat, i) => {
          const Icon = iconMap[cat.iconName] || Code2;
          return (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.35 }}
              className="card p-4 sm:p-6 flex flex-col justify-between hover:-translate-y-1 transition-all"
            >
              <div>
                <div className="inline-flex rounded-xl bg-[rgba(var(--accent-primary),0.1)] p-2.5 sm:p-3 mb-3 sm:mb-4">
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-[rgb(var(--accent-primary))]" />
                </div>
                <h3 className="font-bold text-sm sm:text-base md:text-lg text-[rgb(var(--text-primary))]">
                  {cat.title}
                </h3>
                <ul className="mt-3 sm:mt-4 space-y-1.5 sm:space-y-2">
                  {cat.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-start gap-2 text-xs sm:text-sm text-[rgb(var(--text-secondary))]"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[rgb(var(--accent-primary))] mt-1.5 sm:mt-2 shrink-0" />
                      <span className="leading-snug">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
