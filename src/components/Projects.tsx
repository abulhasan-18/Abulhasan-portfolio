"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  CheckCircle2,
  FolderGit2,
  Tag,
} from "lucide-react";
import * as React from "react";
import { useRole } from "@/context/RoleContext";
import { PROJECTS, ROLES } from "@/data/portfolioData";

export default function Projects() {
  const { activeRole } = useRole();

  return (
    <section id="projects" className="py-14 md:py-20">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold 
                      bg-[rgba(var(--accent-primary),0.1)] text-[rgb(var(--accent-primary))] 
                      border border-[rgba(var(--accent-primary),0.2)] mb-3">
          <FolderGit2 className="h-3.5 w-3.5" />
          <span>Featured Work</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-[rgb(var(--text-primary))]">
          Production Projects & Impact
        </h2>
        <p className="mt-2 text-sm text-[rgb(var(--text-secondary))]">
          Viewing project deliverables and achievements tailored for{" "}
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
          className="space-y-8 max-w-4xl mx-auto"
        >
          {PROJECTS.map((project, i) => {
            const summary =
              project.summaryByRole[activeRole] || project.summaryByRole.all;
            const bullets =
              project.bulletsByRole[activeRole] || project.bulletsByRole.all;
            const tags =
              project.tagsByRole[activeRole] || project.tagsByRole.all;

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
                className="card p-6 md:p-8 hover:-translate-y-0.5 transition-all"
              >
                {/* Header info */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 border-b border-[rgba(var(--border-color),0.4)] pb-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[rgba(var(--accent-primary),0.1)] text-[rgb(var(--accent-primary))]">
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                          Featured
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-[rgb(var(--text-primary))]">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[rgb(var(--text-secondary))] mt-0.5">
                      {project.org}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-[rgb(var(--text-secondary))] shrink-0">
                    <Calendar className="h-3.5 w-3.5 text-[rgb(var(--accent-primary))]" />
                    <span className="font-medium">{project.period}</span>
                    <span className="opacity-60">({project.duration})</span>
                  </div>
                </div>

                {/* Summary Context */}
                <div className="mt-4 bg-[rgba(var(--bg-primary),0.6)] p-3.5 rounded-xl border border-[rgba(var(--border-color),0.5)]">
                  <p className="text-xs sm:text-sm text-[rgb(var(--text-primary))] font-medium leading-relaxed">
                    <span className="font-semibold text-[rgb(var(--accent-primary))] mr-1.5">
                      Overview:
                    </span>
                    {summary}
                  </p>
                </div>

                {/* Key Deliverables / Bullets */}
                <div className="mt-5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[rgb(var(--text-secondary))] mb-3">
                    Key Contributions & Deliverables:
                  </h4>
                  <ul className="space-y-2.5">
                    {bullets.map((bullet, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-sm text-[rgb(var(--text-secondary))]"
                      >
                        <CheckCircle2 className="h-4 w-4 text-[rgb(var(--accent-primary))] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skill & Technology Tags */}
                <div className="mt-6 pt-4 border-t border-[rgba(var(--border-color),0.3)] flex flex-wrap items-center gap-2">
                  <Tag className="h-3.5 w-3.5 text-[rgb(var(--text-secondary))] mr-1" />
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-md bg-[rgba(var(--bg-primary),0.9)] 
                               border border-[rgba(var(--border-color),0.8)] text-[rgb(var(--text-primary))] font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
