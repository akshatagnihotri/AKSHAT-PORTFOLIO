"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Mail, ExternalLink } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { personalInfo } from "@/lib/data";
import Image from "next/image";

const TYPING_PHRASES = [
  "Data Analyst",
  "Business Analyst",
  "AI Solutions Builder",
  "Machine Learning Engineer",
  "BI Developer",
];

const FLOATING_ICONS = [
  { icon: "📊", delay: 0, x: "15%", y: "20%" },
  { icon: "🤖", delay: 0.5, x: "80%", y: "15%" },
  { icon: "🐍", delay: 1, x: "10%", y: "70%" },
  { icon: "⚡", delay: 1.5, x: "85%", y: "65%" },
  { icon: "🧠", delay: 0.8, x: "25%", y: "80%" },
  { icon: "📈", delay: 1.2, x: "72%", y: "78%" },
  { icon: "💡", delay: 0.3, x: "90%", y: "40%" },
  { icon: "🔮", delay: 1.8, x: "5%", y: "45%" },
];

function useTypingEffect(phrases: string[], speed = 80, pause = 1800) {
  const [text, setText] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIdx];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          if (charIdx < current.length) {
            setText(current.slice(0, charIdx + 1));
            setCharIdx((c) => c + 1);
          } else {
            setTimeout(() => setDeleting(true), pause);
          }
        } else {
          if (charIdx > 0) {
            setText(current.slice(0, charIdx - 1));
            setCharIdx((c) => c - 1);
          } else {
            setDeleting(false);
            setPhraseIdx((p) => (p + 1) % phrases.length);
          }
        }
      },
      deleting ? speed / 2 : speed
    );
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, phraseIdx, phrases, speed, pause]);

  return text;
}

// Particle background using canvas
function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 0.5,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.5 + 0.1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99,102,241,${p.alpha})`;
        ctx.fill();
      });

      // Draw lines between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(99,102,241,${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}

export default function Hero() {
  const typedText = useTypingEffect(TYPING_PHRASES);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 80% 80% at 50% -20%, rgba(99,102,241,0.15) 0%, transparent 60%), #0a0a0f",
      }}
    >
      {/* Particle canvas */}
      <ParticleBackground />

      {/* Floating icons */}
      {FLOATING_ICONS.map((item, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl md:text-3xl select-none pointer-events-none"
          style={{ left: item.x, top: item.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.4, 0.8, 0.4],
            scale: [0.9, 1.1, 0.9],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 3 + i * 0.3,
            repeat: Infinity,
            delay: item.delay,
            ease: "easeInOut",
          }}
        >
          {item.icon}
        </motion.div>
      ))}

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-40" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 pt-32 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left - Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6 border border-indigo-500/20"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm text-slate-300">
              Open to opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black mb-4 leading-tight"
          >
            <span className="text-white">Akshat</span>
            <br />
            <span className="gradient-text">Agnihotri</span>
          </motion.h1>

          {/* Typed role */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl font-semibold text-slate-300 mb-6 h-9 flex items-center"
          >
            <span className="text-indigo-400">&gt;</span>
            <span className="ml-2">{typedText}</span>
            <span className="typing-cursor ml-0.5" />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-slate-400 text-base md:text-lg leading-relaxed mb-10 max-w-lg"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-7 py-3.5 rounded-xl font-semibold text-white text-sm transition-all duration-200 flex items-center gap-2"
              style={{
                background:
                  "linear-gradient(135deg, #6366f1, #8b5cf6, #a855f7)",
                boxShadow: "0 0 30px rgba(99,102,241,0.4)",
              }}
            >
              <ExternalLink size={16} />
              View Projects
            </motion.a>
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-7 py-3.5 rounded-xl font-semibold text-white text-sm glass border border-white/10 hover:border-indigo-500/40 transition-all duration-200 flex items-center gap-2"
            >
              <ArrowDown size={16} />
              Download Resume
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-7 py-3.5 rounded-xl font-semibold text-indigo-400 text-sm border border-indigo-500/30 hover:bg-indigo-500/10 transition-all duration-200 flex items-center gap-2"
            >
              <Mail size={16} />
              Contact Me
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex items-center gap-4"
          >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <FaGithub size={20} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-indigo-400 transition-colors"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-slate-400 hover:text-indigo-400 transition-colors"
            >
              <Mail size={22} />
            </a>
            <div className="h-4 w-px bg-white/10" />
            <span className="text-slate-500 text-sm">
              {personalInfo.email}
            </span>
          </motion.div>
        </motion.div>

        {/* Right - Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Outer glow ring */}
            <motion.div
              className="absolute inset-0 rounded-3xl"
              animate={{
                boxShadow: [
                  "0 0 40px rgba(99,102,241,0.3), 0 0 80px rgba(99,102,241,0.1)",
                  "0 0 60px rgba(139,92,246,0.4), 0 0 120px rgba(139,92,246,0.15)",
                  "0 0 40px rgba(99,102,241,0.3), 0 0 80px rgba(99,102,241,0.1)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{ borderRadius: "28px" }}
            />

            {/* Gradient border */}
            <div
              className="p-[2px] rounded-[28px]"
              style={{
                background:
                  "linear-gradient(135deg, #6366f1, #8b5cf6, #a855f7, #ec4899)",
              }}
            >
              <div
                className="relative overflow-hidden"
                style={{ borderRadius: "26px", width: 340, height: 380 }}
              >
                <Image
                  src="/profile.png"
                  alt="Akshat Agnihotri"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Overlay gradient */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(10,10,15,0.6) 0%, transparent 60%)",
                  }}
                />
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="absolute -bottom-5 -left-8 glass rounded-2xl px-4 py-3 border border-white/10"
            >
              <div className="text-xs text-slate-400">Experience</div>
              <div className="text-lg font-bold gradient-text">3+ Years</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              className="absolute -top-5 -right-8 glass rounded-2xl px-4 py-3 border border-white/10"
            >
              <div className="text-xs text-slate-400">Projects</div>
              <div className="text-lg font-bold gradient-text">4+ Live</div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
