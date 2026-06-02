import { motion } from "framer-motion";
import { useScrollReveal, revealVariants } from "../hooks/useScrollReveal";

export default function Contact() {
  const { ref, controls } = useScrollReveal();

  return (
    <section id="contact" className="section contact-section">
      <motion.div
        className="contact-content"
        ref={ref}
        variants={revealVariants}
        initial="hidden"
        animate={controls}
      >
        <h2 className="section-label">Get In Touch</h2>
        <h3 className="section-title">
          Let&apos;s build something
          <span className="gradient-text"> extraordinary</span>
        </h3>
        <p className="section-desc">
          I&apos;m always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>

        <a href="mailto:stanslausmuuo@gmail.com" className="contact-email">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          stanslausmuuo@gmail.com
        </a>

        <div className="contact-links">
          {[
            { label: "GitHub", href: "https://github.com/stanslausmuuo-spec" },
            { label: "LinkedIn", href: "https://linkedin.com/" },
            { label: "Twitter", href: "https://x.com/" },
            { label: "Dev.to", href: "https://dev.to/" },
          ].map((l) => (
            <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer" className="contact-link">
              {l.label}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
