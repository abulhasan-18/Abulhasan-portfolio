"use client";

import { motion, AnimatePresence } from "framer-motion";
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
import { useRole } from "@/context/RoleContext";
import { SKILL_CATEGORIES, ROLES } from "@/data/portfolioData";
import * as React from "react";

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
  const { activeRole } = useRole();

  // Filter or prioritize categories based on active role
  const relevantCategories = React.useMemo(() => {
    if (activeRole === "all") return SKILL_CATEGORIES;
    return SKILL_CATEGORIES.filter((cat) => cat.roles.includes(activeRole));
  }, [activeRole]);

  return (
    <section id="skills" className="py-14 md:py-20">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold 
                      bg-[rgba(var(--accent-primary),0.1)] text-[rgb(var(--accent-primary))] 
                      border border-[rgba(var(--accent-primary),0.2)] mb-3">
          <Layers3 className="h-3.5 w-3.5" />
          <span>Core Capabilities</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-[rgb(var(--text-primary))]">
          Technical & Functional Skills
        </h2>
        <p className="mt-2 text-sm text-[rgb(var(--text-secondary))]">
          Tailored toolkit and competencies aligned for{" "}
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
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {relevantCategories.map((cat, i) => {
            const Icon = iconMap[cat.iconName] || Code2;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="card p-6 flex flex-col justify-between hover:-translate-y-1 transition-all"
              >
                <div>
                  <div className="inline-flex rounded-xl bg-[rgba(var(--accent-primary),0.1)] p-3 mb-4">
                    <Icon className="h-6 w-6 text-[rgb(var(--accent-primary))]" />
                  </div>
                  <h3 className="font-bold text-base md:text-lg text-[rgb(var(--text-primary))]">
                    {cat.title}
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {cat.skills.map((skill) => (
                      <li
                        key={skill}
                        className="flex items-start gap-2 text-sm text-[rgb(var(--text-secondary))]"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-[rgb(var(--accent-primary))] mt-2 shrink-0" />
                        <span className="leading-snug">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
