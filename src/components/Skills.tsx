"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skillCategories } from "@/lib/data";

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [active, setActive] = useState(0);

  return (
    <section id="skills" className="relative py-28 overflow-hidden" ref={ref}>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 80% 40%, rgba(168,85,247,0.07) 0%, transparent 60%), #0a0a0f",
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
            What I Work With
          </span>
          <h2 className="section-title text-white mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div
            className="w-16 h-1 mx-auto rounded-full"
            style={{ background: "linear-gradient(90deg, #6366f1, #a855f7)" }}
          />
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {skillCategories.map((cat, i) => (
            <motion.button
              key={i}
              onClick={() => setActive(i)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                active === i
                  ? "text-white shadow-lg"
                  : "glass text-slate-400 hover:text-white border border-white/5"
              }`}
              style={
                active === i
                  ? {
                      background: `linear-gradient(135deg, ${cat.color}cc, ${cat.color}88)`,
                      boxShadow: `0 0 20px ${cat.color}40`,
                    }
                  : {}
              }
            >
              <span>{cat.icon}</span>
              {cat.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Active category skills */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="glass rounded-3xl p-8 border border-white/5"
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="text-3xl">{skillCategories[active].icon}</span>
              <div>
                <h3 className="text-xl font-bold text-white">
                  {skillCategories[active].name}
                </h3>
                <p className="text-slate-500 text-sm">
                  {skillCategories[active].skills.length} core technologies
                </p>
              </div>
            </div>

            <div className="space-y-5">
              {skillCategories[active].skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-medium text-sm">
                      {skill.name}
                    </span>
                    <span
                      className="text-xs font-bold"
                      style={{ color: skillCategories[active].color }}
                    >
                      {skill.level}%
                    </span>
                  </div>
                  <div className="progress-bar">
                    <motion.div
                      className="progress-fill"
                      initial={{ width: 0 }}
                      animate={{ width: inView ? `${skill.level}%` : 0 }}
                      transition={{
                        duration: 1.2,
                        delay: i * 0.1,
                        ease: "easeOut",
                      }}
                      style={{
                        background: `linear-gradient(90deg, ${skillCategories[active].color}, ${skillCategories[active].color}aa)`,
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Tech badges row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-10 flex flex-wrap gap-3 justify-center"
        >
          {skillCategories
            .flatMap((c) => c.skills)
            .map((skill, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.03 }}
                whileHover={{ scale: 1.1 }}
                className="px-3 py-1.5 rounded-lg text-xs font-medium glass border border-white/5 text-slate-300 hover:text-white hover:border-indigo-500/30 transition-all cursor-default"
              >
                {skill.name}
              </motion.span>
            ))}
        </motion.div>
      </div>
    </section>
  );
}
