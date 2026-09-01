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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 px-2"
      >
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 dark:bg-sky-950/60 dark:text-sky-300 border border-blue-200 dark:border-sky-800/60 mb-3 shadow-xs">
          <Layers3 className="h-3.5 w-3.5" />
          <span>Technical &amp; Analytical Toolkit</span>
        </div>
        <h2 className="text-xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
          Skills &amp; Competencies
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
          Bridging full-stack software development, SQL star schema data modeling, business intelligence, and requirements engineering
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {SKILL_CATEGORIES.map((cat, i) => {
          const Icon = iconMap[cat.iconName] || Code2;
          return (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.08, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5, scale: 1.015 }}
              className="card p-4 sm:p-6 flex flex-col justify-between group"
            >
              <div>
                <div className="inline-flex rounded-xl bg-blue-50 dark:bg-sky-950/80 p-2.5 sm:p-3 mb-3 sm:mb-4 text-blue-600 dark:text-sky-400 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-sky-500 dark:group-hover:text-slate-950 transition-all duration-300 shadow-2xs">
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <h3 className="font-bold text-sm sm:text-base md:text-lg text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors">
                  {cat.title}
                </h3>
                <ul className="mt-3 sm:mt-4 space-y-1.5 sm:space-y-2">
                  {cat.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-colors"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-sky-400 mt-1.5 sm:mt-2 shrink-0 group-hover:scale-125 transition-transform" />
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
