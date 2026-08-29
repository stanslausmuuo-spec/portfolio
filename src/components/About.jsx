import { motion } from "framer-motion";
import { useScrollReveal, revealVariants } from "../hooks/useScrollReveal";

export default function About() {
  const { ref, controls } = useScrollReveal();

  return (
    <section id="about" className="section about-section">
      <motion.div
        className="about-content"
        ref={ref}
        variants={revealVariants}
        initial="hidden"
        animate={controls}
      >
        <h2 className="section-label">About Me</h2>
        <h3 className="section-title">
          Engineering digital solutions with
          <span className="gradient-text"> precision & creativity</span>
        </h3>
        <div className="about-grid">
          <div className="about-text">
            <p>
              Software Engineer with expertise in crafting top-notch, responsive websites that prioritize user experience.
              Focused on delivering reliable, secure solutions that support business goals.
            </p>
            <p>
              My expertise spans web development, system architecture, networking, DevOps, cloud infrastructure, UI/UX,
              cybersecurity, and software development. Full-cycle maestro driving ideas from inception to delivery,
              ensuring projects are on time and on budget.
            </p>
            <p>
              Your vision? I&apos;m ready to turn it into a blockbuster web reality.
            </p>
            <div className="about-stats">
              {[
                { value: "2+", label: "Years Exp" },
                { value: "10+", label: "Credentials" },
                { value: "30+", label: "Open Source" },
                { value: "15+", label: "Technologies" },
              ].map((stat) => (
                <div key={stat.label} className="stat">
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="about-visual">
            <div className="code-block">
              <div className="code-dots">
                <span /><span /><span />
              </div>
              <pre><code>{`const engineer = {
  name: "Stanslaus",
  role: "Software Engineer",
  stack: ["React", "Node.js", "JavaScript", "AWS"],
  passion: "Building performant
    & scalable systems",
  motto: "Clean code, 
    strong solutions"
};`}</code></pre>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
