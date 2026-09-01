"use client";

import { useRole } from "@/context/RoleContext";
import { RoleId, ROLES } from "@/data/portfolioData";
import { motion } from "framer-motion";
import { Briefcase, BarChart3, Code2, Globe, Check, Copy, Sparkles } from "lucide-react";
import { useState } from "react";

const roleTabs: { id: RoleId; label: string; icon: typeof Globe }[] = [
  { id: "all", label: "Overview", icon: Globe },
  { id: "ba", label: "Business Analyst", icon: Briefcase },
  { id: "data", label: "Data & BI Analyst", icon: BarChart3 },
  { id: "swe", label: "Software Engineer", icon: Code2 },
];

export default function RoleSwitcher() {
  const { activeRole, setActiveRole } = useRole();
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      const url = new URL(window.location.origin);
      if (activeRole !== "all") {
        url.searchParams.set("role", activeRole);
      }
      navigator.clipboard.writeText(url.toString()).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-6 px-2">
      <div className="card p-2 md:p-2.5 bg-[rgba(var(--bg-secondary),0.9)] shadow-lg border border-[rgba(var(--border-color),0.8)] backdrop-blur-xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-2 py-1">
          <div className="flex items-center gap-2 text-xs font-semibold text-[rgb(var(--text-secondary))] uppercase tracking-wider">
            <Sparkles className="h-4 w-4 text-[rgb(var(--accent-primary))]" />
            <span>Select Target Role View:</span>
          </div>

          <button
            onClick={handleCopyLink}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[rgb(var(--text-secondary))] 
                     hover:text-[rgb(var(--accent-primary))] transition-colors px-2.5 py-1 rounded-md 
                     hover:bg-[rgba(var(--accent-primary),0.08)]"
            title="Copy shareable link for this specific role view"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-green-500" />
                <span className="text-green-500 font-medium">Role link copied!</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                <span>Copy {ROLES[activeRole].shortLabel} Link</span>
              </>
            )}
          </button>
        </div>

        {/* Role tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1.5 mt-2">
          {roleTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeRole === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveRole(tab.id)}
                className={`relative flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs md:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "text-white font-semibold shadow-sm"
                    : "text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--text-primary))] hover:bg-[rgba(var(--bg-primary),0.5)]"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeRolePill"
                    className="absolute inset-0 rounded-lg btn-accent"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  <Icon className={`h-4 w-4 ${isActive ? "text-white" : "text-[rgb(var(--accent-primary))]"}`} />
                  <span className="truncate">{tab.label}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
