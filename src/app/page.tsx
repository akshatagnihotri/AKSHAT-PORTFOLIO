"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import CursorGlow from "@/components/CursorGlow";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {/* Loading screen – sets loaded=true when done */}
      <LoadingScreenWrapper onDone={() => setLoaded(true)} />

      <CursorGlow />
      <ScrollProgress />

      <AnimatePresence>
        {loaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Navbar />
            <main>
              <Hero />
              <About />
              <Experience />
              <Skills />
              <Projects />
              <Achievements />
              <Certifications />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Wrapper so LoadingScreen can call onDone when finished
function LoadingScreenWrapper({ onDone }: { onDone: () => void }) {
  return <LoadingScreenInner onDone={onDone} />;
}

import { useEffect, useRef } from "react";

function LoadingScreenInner({ onDone }: { onDone: () => void }) {
  const called = useRef(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!called.current) {
        called.current = true;
        onDone();
      }
    }, 2800);
    return () => clearTimeout(timer);
  }, [onDone]);

  return <LoadingScreen />;
}
