"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { projects } from "@/lib/data";
import { ExternalLink, Sparkles } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const CATEGORIES = ["All", "AI", "ML", "Analytics", "Development"];

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-28 overflow-hidden" ref={ref}>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 30% 60%, rgba(99,102,241,0.08) 0%, transparent 60%), #0a0a0f",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            What I&apos;ve Built
          </span>
          <h2 className="section-title text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div
            className="w-16 h-1 mx-auto rounded-full"
            style={{ background: "linear-gradient(90deg, #6366f1, #a855f7)" }}
          />
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {CATEGORIES.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setFilter(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                filter === cat
                  ? "text-white"
                  : "glass text-slate-400 hover:text-white border border-white/5"
              }`}
              style={
                filter === cat
                  ? {
                      background:
                        "linear-gradient(135deg, #6366f1, #8b5cf6)",
                      boxShadow: "0 0 20px rgba(99,102,241,0.4)",
                    }
                  : {}
              }
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="group relative glass rounded-3xl overflow-hidden border border-white/5 hover:border-indigo-500/30 transition-all duration-400"
              >
                {/* Gradient header */}
                <div
                  className={`h-2 bg-gradient-to-r ${project.gradient}`}
                />

                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at top left, ${
                      project.gradient.includes("indigo")
                        ? "rgba(99,102,241,0.08)"
                        : project.gradient.includes("blue")
                        ? "rgba(59,130,246,0.08)"
                        : project.gradient.includes("orange")
                        ? "rgba(249,115,22,0.08)"
                        : "rgba(16,185,129,0.08)"
                    } 0%, transparent 60%)`,
                  }}
                />

                <div className="p-7">
                  {/* Project icon & title */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{project.icon}</span>
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          {project.title}
                        </h3>
                        <p className="text-slate-500 text-sm">
                          {project.subtitle}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs glass px-2.5 py-1 rounded-lg border border-white/5 text-slate-400">
                      {project.category}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Highlight badge */}
                  <div className="flex items-center gap-2 mb-5 p-3 rounded-xl bg-indigo-500/8 border border-indigo-500/15">
                    <Sparkles size={12} className="text-indigo-400 flex-shrink-0" />
                    <span className="text-indigo-300 text-xs font-medium">
                      {project.highlight}
                    </span>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.features.map((f) => (
                      <span
                        key={f}
                        className="text-xs px-2.5 py-1 rounded-lg"
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          color: "#94a3b8",
                          border: "1px solid rgba(255,255,255,0.06)",
                        }}
                      >
                        ✓ {f}
                      </span>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-md font-medium"
                        style={{
                          background: "rgba(99,102,241,0.12)",
                          color: "#a5b4fc",
                          border: "1px solid rgba(99,102,241,0.2)",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3">
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium text-white transition-all"
                      style={{
                        background:
                          "linear-gradient(135deg, #6366f1, #8b5cf6)",
                      }}
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium text-slate-300 glass border border-white/10 hover:border-white/20 transition-all"
                    >
                      <FaGithub size={13} />
                      GitHub
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
