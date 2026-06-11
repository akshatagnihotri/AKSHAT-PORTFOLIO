"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { certifications } from "@/lib/data";
import { Award } from "lucide-react";

export default function Certifications() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="certifications" className="relative py-24 overflow-hidden" ref={ref}>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 70% 50%, rgba(139,92,246,0.07) 0%, transparent 60%), #0a0a0f",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            Credentials
          </span>
          <h2 className="section-title text-white mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <div
            className="w-16 h-1 mx-auto rounded-full"
            style={{ background: "linear-gradient(90deg, #6366f1, #a855f7)" }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="relative glass rounded-2xl p-6 border border-white/5 hover:border-indigo-500/25 transition-all duration-300 overflow-hidden group"
            >
              {/* Background gradient */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at top left, ${cert.color}10 0%, transparent 60%)`,
                }}
              />

              {/* Top gradient line */}
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{
                  background: `linear-gradient(90deg, transparent, ${cert.color}, transparent)`,
                }}
              />

              <div className="relative flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl"
                  style={{ background: `${cert.color}18`, border: `1px solid ${cert.color}30` }}
                >
                  {cert.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Award size={14} style={{ color: cert.color }} />
                    <span
                      className="text-xs font-medium"
                      style={{ color: cert.color }}
                    >
                      Verified Certificate
                    </span>
                  </div>
                  <h3 className="text-white font-semibold text-sm leading-snug mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-slate-500 text-xs">{cert.issuer}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
