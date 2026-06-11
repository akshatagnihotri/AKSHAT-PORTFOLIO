"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { experiences } from "@/lib/data";
import { Briefcase, Calendar, CheckCircle } from "lucide-react";

export default function Experience() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="experience" className="relative py-24 overflow-hidden" ref={ref}>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 20% 50%, rgba(139,92,246,0.07) 0%, transparent 60%), #0a0a0f",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            My Journey
          </span>
          <h2 className="section-title text-white mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div
            className="w-16 h-1 mx-auto rounded-full"
            style={{ background: "linear-gradient(90deg, #6366f1, #a855f7)" }}
          />
        </motion.div>

        {/* Timeline — single column, left-aligned on all screens */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-purple-500/30 to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative pl-14"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-[14px] top-6 w-[22px] h-[22px] rounded-full border-2 border-indigo-500 bg-[#0a0a0f] z-10 flex items-center justify-center"
                >
                  <div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ background: exp.color }}
                  />
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ scale: 1.01, y: -2 }}
                  className="glass rounded-2xl p-5 sm:p-6 border border-white/5 hover:border-indigo-500/20 transition-all duration-300"
                >
                  {/* Top row */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <Briefcase size={13} style={{ color: exp.color }} />
                        <span
                          className="text-xs font-medium px-2 py-0.5 rounded-full"
                          style={{
                            background: `${exp.color}22`,
                            color: exp.color,
                          }}
                        >
                          {exp.type}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-white">
                        {exp.role}
                      </h3>
                      <p className="font-semibold text-sm" style={{ color: exp.color }}>
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-slate-500 text-xs whitespace-nowrap self-start">
                      <Calendar size={11} />
                      {exp.period}
                    </div>
                  </div>

                  <div className="h-px bg-white/5 mb-4" />

                  <ul className="space-y-2.5">
                    {exp.achievements.map((ach, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: i * 0.12 + j * 0.05 }}
                        className="flex items-start gap-2.5 text-slate-400 text-sm leading-relaxed"
                      >
                        <CheckCircle
                          size={13}
                          className="flex-shrink-0 mt-1"
                          style={{ color: exp.color }}
                        />
                        {ach}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
