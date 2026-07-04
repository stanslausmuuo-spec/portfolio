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
              I&apos;m a software engineer with experience in crafting scalable, high-performance
              production-grade applications and innovative software solutions. My expertise spans full stack web
              development, DevOps, cloud infrastructure, system architecture, software development and networking.
            </p>
            <p>
              I thrive at the intersection of performance engineering and user
              experience, writing code that is as maintainable and elegant.
              Currently focused on distributed systems, real-time applications,
              and developer tooling.
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
