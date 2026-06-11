"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { Mail, Heart, ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative py-12 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold text-white"
              style={{
                background: "linear-gradient(135deg, #6366f1, #8b5cf6, #a855f7)",
              }}
            >
              AA
            </div>
            <div>
              <div className="text-sm font-semibold text-white">
                Akshat Agnihotri
              </div>
              <div className="text-xs text-slate-500">Data Analyst · AI Solutions Builder</div>
            </div>
          </div>

          {/* Made with love */}
          <div className="flex items-center gap-1.5 text-slate-500 text-sm">
            <span>Crafted with</span>
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart size={14} className="text-pink-500 fill-pink-500" />
            </motion.div>
            <span>using Next.js & Framer Motion</span>
          </div>

          {/* Social + back to top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-white transition-colors"
            >
              <FaGithub size={16} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-indigo-400 transition-colors"
            >
              <FaLinkedinIn size={16} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-slate-500 hover:text-indigo-400 transition-colors"
            >
              <Mail size={18} />
            </a>
            <div className="w-px h-4 bg-white/10" />
            <motion.button
              onClick={scrollTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="glass border border-white/8 p-2 rounded-xl text-slate-400 hover:text-white transition-all"
            >
              <ArrowUp size={16} />
            </motion.button>
          </div>
        </div>

        <div className="mt-8 text-center text-slate-600 text-xs">
          © {new Date().getFullYear()} Akshat Agnihotri. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
