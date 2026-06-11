"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const traits = [
  { icon: "📊", title: "Data Analytics", desc: "SQL, Python, Power BI, Tableau" },
  { icon: "🤖", title: "Machine Learning", desc: "Regression, Classification, Clustering" },
  { icon: "✨", title: "AI & Automation", desc: "LLMs, AI Agents, NLP, FastAPI" },
  { icon: "📈", title: "Business Intelligence", desc: "Dashboards, KPIs, Reporting" },
];

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="relative py-28 overflow-hidden" ref={ref}>
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 70% 50%, rgba(99,102,241,0.08) 0%, transparent 70%), #0a0a0f",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            Get to Know Me
          </span>
          <h2 className="section-title text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-16 h-1 mx-auto rounded-full" style={{ background: "linear-gradient(90deg, #6366f1, #a855f7)" }} />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="space-y-5 text-slate-300 leading-relaxed text-base">
              <p>
                I&apos;m a{" "}
                <span className="text-indigo-400 font-semibold">
                  Data Analyst
                </span>{" "}
                with a strong foundation in mathematics, statistics, SQL, machine
                learning, and business intelligence. I turn complex data into
                clear, actionable insights that drive business decisions.
              </p>
              <p>
                Experienced in{" "}
                <span className="text-purple-400 font-semibold">
                  leading cross-functional teams
                </span>
                , developing AI-powered platforms, building analytics dashboards,
                conducting market research, and delivering data-driven business
                solutions across multiple industries.
              </p>
              <p>
                Passionate about{" "}
                <span className="text-indigo-400 font-semibold">
                  Data Analytics, Business Intelligence, Generative AI, Machine
                  Learning
                </span>
                , and Product Analytics — with a mission to bridge the gap
                between raw data and impactful business strategies.
              </p>
            </div>

            {/* Quick stats row */}
            <div className="mt-10 grid grid-cols-3 gap-4">
              {[
                { val: "3+", label: "Years Exp." },
                { val: "15+", label: "Team Led" },
                { val: "4+", label: "Live Projects" },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="glass rounded-2xl p-4 text-center border border-white/5"
                >
                  <div className="text-2xl font-black gradient-text">{s.val}</div>
                  <div className="text-xs text-slate-500 mt-1">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Trait Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {traits.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="glass rounded-2xl p-5 border border-white/5 hover:border-indigo-500/30 transition-all duration-300 card-hover cursor-default"
              >
                <div className="text-3xl mb-3">{t.icon}</div>
                <div className="font-semibold text-white text-sm mb-1">{t.title}</div>
                <div className="text-slate-500 text-xs leading-relaxed">{t.desc}</div>
              </motion.div>
            ))}

            {/* Hiring badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="col-span-2 glass rounded-2xl p-5 border border-indigo-500/20"
              style={{ background: "rgba(99,102,241,0.06)" }}
            >
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm text-slate-300 font-medium">
                  Open to{" "}
                  <span className="text-indigo-400">Data Analyst</span>,{" "}
                  <span className="text-purple-400">Business Analyst</span>, and{" "}
                  <span className="text-pink-400">AI/ML roles</span> globally
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
