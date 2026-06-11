"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { achievements } from "@/lib/data";

function AnimatedCounter({
  value,
  suffix,
  inView,
}: {
  value: number;
  suffix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const duration = 1800;
    const start = performance.now();
    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(value);
    };
    requestAnimationFrame(animate);
  }, [inView, value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function Achievements() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="achievements" className="relative py-24 overflow-hidden" ref={ref}>
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(99,102,241,0.07) 0%, transparent 60%), #0a0a0f",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            Impact & Results
          </span>
          <h2 className="section-title text-white mb-4">
            Key <span className="gradient-text">Achievements</span>
          </h2>
          <div
            className="w-16 h-1 mx-auto rounded-full"
            style={{ background: "linear-gradient(90deg, #6366f1, #a855f7)" }}
          />
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {achievements.map((ach, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="relative group glass rounded-2xl p-6 text-center border border-white/5 hover:border-indigo-500/30 transition-all duration-300 overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                style={{ background: "radial-gradient(ellipse at center, rgba(99,102,241,0.08) 0%, transparent 70%)" }}
              />

              <div className="text-3xl mb-3">{ach.icon}</div>
              <div
                className="text-3xl md:text-4xl font-black mb-2"
                style={{
                  background:
                    "linear-gradient(135deg, #6366f1, #8b5cf6, #a855f7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                <AnimatedCounter
                  value={ach.value}
                  suffix={ach.suffix}
                  inView={inView}
                />
              </div>
              <div className="text-slate-400 text-xs leading-tight">{ach.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Companies callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 glass rounded-2xl p-6 border border-white/5 text-center"
        >
          <p className="text-slate-400 text-sm mb-4">
            Targeting top-tier companies & high-growth startups
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-slate-500 text-sm font-medium">
            {[
              "Google",
              "Microsoft",
              "Deloitte",
              "PwC",
              "Capgemini",
              "Accenture",
              "Amazon",
              "AI Startups",
            ].map((co) => (
              <span
                key={co}
                className="px-3 py-1.5 rounded-lg glass border border-white/5 hover:text-indigo-400 hover:border-indigo-500/20 transition-all cursor-default text-xs"
              >
                {co}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
