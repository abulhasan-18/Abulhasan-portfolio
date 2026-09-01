"use client";

import { motion } from "framer-motion";
import {
  Smartphone,
  Database,
  BarChart3,
  Lightbulb,
  CheckCircle2,
  GitMerge,
} from "lucide-react";
import { LIFECYCLE_STEPS } from "@/data/portfolioData";

const stepIcons = [Smartphone, Database, BarChart3, Lightbulb];

export default function LifecycleWorkflow() {
  return (
    <section id="workflow" className="py-10 sm:py-16 md:py-20">
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 px-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 dark:bg-sky-950/60 dark:text-sky-300 border border-blue-200 dark:border-sky-800/60 mb-3 shadow-xs">
          <GitMerge className="h-3.5 w-3.5" />
          <span>The End-to-End Synergy</span>
        </div>
        <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
          How I Connect App Development, Data Modeling &amp; Business Growth
        </h2>
        <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed px-1">
          I don’t just write code or build isolated dashboards. I engineer production applications, design the SQL star schemas to capture telemetry, perform deep data analysis on real user behavior, and translate insights into high-ROI business improvements.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
        {LIFECYCLE_STEPS.map((item, idx) => {
          const Icon = stepIcons[idx];
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
              className="card p-4 sm:p-5 md:p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <div className="inline-flex rounded-xl bg-blue-50 dark:bg-sky-950/80 p-2 sm:p-2.5 text-blue-600 dark:text-sky-400 shrink-0">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 dark:bg-sky-950/60 dark:text-sky-300 border border-blue-200/80 dark:border-sky-800/60">
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-bold text-sm sm:text-base md:text-lg text-slate-900 dark:text-slate-100 leading-snug">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>

                <ul className="mt-3.5 sm:mt-4 space-y-1.5 sm:space-y-2 border-t border-slate-200/80 dark:border-slate-800/80 pt-3">
                  {item.details.map((detail, dIdx) => (
                    <li
                      key={dIdx}
                      className="flex items-start gap-2 text-[11px] sm:text-xs text-slate-600 dark:text-slate-400"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 dark:text-sky-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{detail}</span>
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
