"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  CheckCircle2,
  FolderGit2,
  Tag,
  Smartphone,
  Database,
  BarChart3,
  Lightbulb,
} from "lucide-react";
import { PROJECTS } from "@/data/portfolioData";

export default function Projects() {
  return (
    <section id="projects" className="py-10 sm:py-16 md:py-20">
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 px-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 dark:bg-sky-950/60 dark:text-sky-300 border border-blue-200 dark:border-sky-800/60 mb-3 shadow-xs">
          <FolderGit2 className="h-3.5 w-3.5" />
          <span>Featured Work</span>
        </div>
        <h2 className="text-xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
          Production Projects &amp; End-to-End Impact
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
          Real-world applications built, modeled with SQL star schemas, analyzed with BI dashboards, and optimized for business ROI
        </p>
      </div>

      <div className="space-y-6 sm:space-y-8 max-w-4xl mx-auto">
        {PROJECTS.map((project, i) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className="card p-4 sm:p-6 md:p-8"
          >
            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2.5 sm:gap-3 border-b border-slate-200/80 dark:border-slate-800/80 pb-4">
              <div>
                <div className="flex flex-wrap items-center gap-1.5 mb-1.5">
                  <span className="text-[11px] sm:text-xs font-semibold px-2 sm:px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 dark:bg-sky-950/60 dark:text-sky-300 border border-blue-200/60 dark:border-sky-800/60">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="text-[11px] sm:text-xs font-medium px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60">
                      Featured
                    </span>
                  )}
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 dark:text-slate-100">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {project.org}
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 shrink-0">
                <Calendar className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-blue-600 dark:text-sky-400" />
                <span className="font-medium">{project.period}</span>
                <span className="opacity-60">({project.duration})</span>
              </div>
            </div>

            {/* Overview / Tagline */}
            <div className="mt-3.5 sm:mt-4 bg-slate-50/80 dark:bg-slate-800/50 p-3 sm:p-3.5 rounded-xl border border-slate-200/80 dark:border-slate-800/80">
              <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
                <span className="font-semibold text-blue-600 dark:text-sky-400 mr-1.5">
                  Overview:
                </span>
                {project.overview}
              </p>
            </div>

            {/* 4-Pillar Lifecycle Breakdown Grid */}
            <div className="mt-4 sm:mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
              <div className="p-2.5 sm:p-3 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-800/70">
                <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-blue-600 dark:text-sky-400 mb-1">
                  <Smartphone className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0" />
                  <span>1. App Engineering</span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.lifecycleHighlights.engineering}
                </p>
              </div>

              <div className="p-2.5 sm:p-3 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-800/70">
                <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-blue-600 dark:text-sky-400 mb-1">
                  <Database className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0" />
                  <span>2. SQL Star Schema</span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.lifecycleHighlights.dataModeling}
                </p>
              </div>

              <div className="p-2.5 sm:p-3 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-800/70">
                <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-blue-600 dark:text-sky-400 mb-1">
                  <BarChart3 className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0" />
                  <span>3. BI Analytics</span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.lifecycleHighlights.analytics}
                </p>
              </div>

              <div className="p-2.5 sm:p-3 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-800/70">
                <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-blue-600 dark:text-sky-400 mb-1">
                  <Lightbulb className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0" />
                  <span>4. Business Impact</span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.lifecycleHighlights.businessImpact}
                </p>
              </div>
            </div>

            {/* Key Deliverables & Bullets */}
            <div className="mt-4 sm:mt-5">
              <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 sm:mb-3">
                Key Contributions &amp; Results:
              </h4>
              <ul className="space-y-2 sm:space-y-2.5">
                {project.bullets.map((bullet, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-blue-600 dark:text-sky-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skill & Technology Tags */}
            <div className="mt-5 sm:mt-6 pt-3 sm:pt-4 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-wrap items-center gap-1.5 sm:gap-2">
              <Tag className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-slate-400 mr-0.5" />
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] sm:text-xs px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
