import { motion } from "framer-motion";
import { skillCategories } from "../data/skills";
import { useScrollReveal, revealVariants, cardVariants } from "../hooks/useScrollReveal";

function SkillBar({ name, level, index }) {
  return (
    <motion.div
      className="skill-bar"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
    >
      <div className="skill-bar-info">
        <span className="skill-name">{name}</span>
        <span className="skill-level">{level}%</span>
      </div>
      <div className="skill-bar-track">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.3, duration: 0.8, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const { ref, controls } = useScrollReveal();

  return (
    <section id="skills" className="section skills-section">
      <motion.div
        ref={ref}
        variants={revealVariants}
        initial="hidden"
        animate={controls}
      >
        <h2 className="section-label">Skills & Expertise</h2>
        <h3 className="section-title">
          Technologies I work with
          <span className="gradient-text"> every day</span>
        </h3>
      </motion.div>

      <div className="skills-grid">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.title}
            className="skill-category"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <h4 className="skill-category-title">{cat.title}</h4>
            {cat.skills.map((skill, j) => (
              <SkillBar key={skill.name} {...skill} index={j} />
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
