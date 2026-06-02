import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollReveal, revealVariants } from "../hooks/useScrollReveal";
import { ICONS } from "../data/icons";

const roles = ["Software Engineer", "Full Stack Web Developer", "System Architect", "Open Source Contributor"];

function useRoleCycle(roles, interval = 3000) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % roles.length), interval);
    return () => clearInterval(id);
  }, [roles.length, interval]);
  return roles[index];
}

export default function Hero() {
  const { ref, controls } = useScrollReveal();
  const currentRole = useRoleCycle(roles);

  return (
    <section id="hero" className="section hero-section">
      <div className="hero-layout" ref={ref}>
        <div className="hero-content">
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--accent)">
            <circle cx="12" cy="12" r="10" />
          </svg>
          Available for opportunities
        </motion.div>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          Hi, I&apos;m
          <span className="gradient-text"> Stanslaus</span>
        </motion.h1>

        <div className="hero-subtitle-wrap" style={{ position: "relative", height: "1.5em", marginBottom: "1.25rem" }}>
          <AnimatePresence mode="wait">
            <motion.p
              className="hero-subtitle"
              key={currentRole}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              style={{ position: "absolute" }}
            >
              <span className="gradient-text">{currentRole}</span>
            </motion.p>
          </AnimatePresence>
        </div>

        <motion.p
          className="hero-desc"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
        >
          I build high-performance, scalable applications with modern technologies.
          Passionate about crafting digital experiences that push boundaries.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.7 }}
        >
          <a href="#projects" className="btn btn-primary" onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}>
            View My Work
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <a href="#contact" className="btn btn-secondary" onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}>
            Get In Touch
          </a>
        </motion.div>

        <motion.div
          className="hero-social"
          variants={revealVariants}
          initial="hidden"
          animate={controls}
        >
          {[
            { label: "GitHub", href: "https://github.com/stanslausmuuo-spec", icon: ICONS.github },
            { label: "LinkedIn", href: "https://linkedin.com/", icon: ICONS.linkedin },
            { label: "Instagram", href: "https://instagram.com/", icon: ICONS.instagram },
            { label: "WhatsApp", href: "https://wa.me/254769673300", icon: ICONS.whatsapp },
          ].map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer" aria-label={s.label}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d={s.icon} />
              </svg>
            </a>
          ))}
        </motion.div>

        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="1" y="1" width="14" height="22" rx="7" />
            <circle cx="8" cy="8" r="2" fill="currentColor" className="scroll-dot" />
          </svg>
        </motion.div>
      </div>

      <motion.div
        className="hero-photo"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.7 }}
      >
        <div className="hero-photo-frame">
          <img src="/profile.jpeg" alt="Stanslaus" />
        </div>
      </motion.div>
    </div>
    </section>
  );
}
