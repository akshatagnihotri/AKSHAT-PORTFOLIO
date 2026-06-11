"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      setProgress(totalHeight > 0 ? (scrolled / totalHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[9997] h-[3px] bg-transparent">
      <motion.div
        className="h-full"
        style={{
          width: `${progress}%`,
          background:
            "linear-gradient(90deg, #6366f1, #8b5cf6, #a855f7, #ec4899)",
          boxShadow: "0 0 10px rgba(99,102,241,0.7)",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 40 }}
      />
    </div>
  );
}
