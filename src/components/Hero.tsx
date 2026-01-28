"use client";

import { Mail, Phone, Linkedin, ArrowRight, BadgeCheck } from "lucide-react";
import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative py-16 md:py-24">
      {/* gradient glow - very subtle */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-96 w-96 md:h-[400px] md:w-[400px] 
                    -translate-x-1/2 rounded-full 
                    bg-[radial-gradient(circle,rgba(var(--accent-primary),0.08)_0%,transparent_70%)]
                    blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="card mx-auto max-w-4xl p-8 md:p-12 text-center relative overflow-hidden"
      >
        <h1 className="text-3xl md:text-5xl font-bold leading-tight text-[rgb(var(--text-primary))]">
          <Balancer>MOHAMMED ABULHASAN M</Balancer>
        </h1>

        <p className="mt-3 text-base md:text-lg text-[rgb(var(--text-secondary))] flex items-center justify-center gap-2">
          Software &amp; Data Engineer
          <BadgeCheck className="h-5 w-5 text-[rgb(var(--accent-primary))]" />
        </p>

        <p className="mt-6 text-[rgb(var(--text-secondary))] leading-relaxed max-w-3xl mx-auto">
          Software &amp; Data Engineer with 2+ years of experience in Java
          (Spring Boot) backend and Flutter mobile apps. Skilled in scalable
          REST APIs, data-driven systems, and user-focused apps. Experience with
          PostgreSQL/Supabase, MySQL, Git, Docker, DBT, and AWS (Glue, S3,
          EventBridge, Lambda, Step Functions, Iceberg). Involved in migrations
          from HDFS to AWS Snowflake. Recognized for problem-solving,
          adaptability, and reliable delivery under tight deadlines.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:mdyahasan18@gmail.com"
            className="btn-accent inline-flex items-center gap-2 rounded-xl px-5 py-2.5 
                     font-medium text-white hover:scale-105 transition-transform duration-200"
          >
            <Mail className="h-4 w-4" /> Email
          </a>

          <a
            href="tel:+918870948248"
            className="inline-flex items-center gap-2 rounded-xl 
                     border border-[rgba(var(--border-color),0.5)]
                     bg-[rgba(var(--bg-secondary),0.6)]
                     px-5 py-2.5 font-medium
                     text-[rgb(var(--text-primary))]
                     hover:bg-[rgba(var(--accent-primary),0.08)]
                     hover:border-[rgba(var(--accent-primary),0.3)]
                     transition-all duration-200"
          >
            <Phone className="h-4 w-4" /> Call
          </a>

          <a
            href="https://www.linkedin.com/in/mohammed-abulhasan-256767235/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl 
                     border border-[rgba(var(--border-color),0.5)]
                     bg-[rgba(var(--bg-secondary),0.6)]
                     px-5 py-2.5 font-medium
                     text-[rgb(var(--text-primary))]
                     hover:bg-[rgba(var(--accent-primary),0.08)]
                     hover:border-[rgba(var(--accent-primary),0.3)]
                     transition-all duration-200 group"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
