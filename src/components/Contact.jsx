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

        <a href="https://wa.me/254769673300" target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer" className="contact-email">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-1.099-1.018-1.842-2.273-2.057-2.657-.215-.385-.023-.593.162-.785.165-.17.371-.445.557-.668.186-.223.248-.373.372-.622.124-.248.062-.465-.031-.65-.093-.186-.67-1.614-.919-2.21-.241-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          +254 769 673 300
        </a>

        <div className="contact-links">
          {[
            { label: "GitHub", href: "https://github.com/stanslausmuuo-spec" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/stanslaus-muuo-119218383" },
            { label: "Instagram", href: "https://www.instagram.com/brixa_tech?igsh=cWoyeTAzeHoyNjhn" },
            { label: "WhatsApp", href: "https://wa.me/254769673300" },
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
