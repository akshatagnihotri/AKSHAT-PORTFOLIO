"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 400);
          return 100;
        }
        return p + Math.random() * 15 + 5;
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: "#0a0a0f" }}
        >
          {/* Radial glow */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(99,102,241,0.15) 0%, transparent 70%)",
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 text-center"
          >
            {/* Logo */}
            <motion.div
              className="mb-8"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(99,102,241,0.3)",
                  "0 0 60px rgba(99,102,241,0.6)",
                  "0 0 20px rgba(99,102,241,0.3)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{
                width: 80,
                height: 80,
                borderRadius: "20px",
                background: "linear-gradient(135deg, #6366f1, #8b5cf6, #a855f7)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 32px",
                fontSize: "2rem",
                fontWeight: 800,
                color: "white",
              }}
            >
              AA
            </motion.div>

            <motion.h1
              className="text-3xl font-bold mb-2 gradient-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Akshat Agnihotri
            </motion.h1>
            <motion.p
              className="text-slate-400 text-sm mb-12 tracking-widest uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Data Analyst · AI Solutions Builder
            </motion.p>

            {/* Progress */}
            <div className="w-64 mx-auto">
              <div className="flex justify-between text-xs text-slate-500 mb-2">
                <span>Loading portfolio...</span>
                <span>{Math.min(100, Math.floor(progress))}%</span>
              </div>
              <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, #6366f1, #8b5cf6, #a855f7)",
                    width: `${Math.min(100, progress)}%`,
                  }}
                  transition={{ duration: 0.1 }}
                />
              </div>
            </div>
          </motion.div>

          {/* Bottom dots */}
          <div className="absolute bottom-12 flex gap-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-indigo-500"
                animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
