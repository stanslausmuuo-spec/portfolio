import { useState, memo } from "react";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import ProjectModal from "./ProjectModal";
import { useScrollReveal, revealVariants, staggerVariants, cardVariants } from "../hooks/useScrollReveal";
import { ICONS } from "../data/icons";

const ProjectCard = memo(function ProjectCard({ project, onClick }) {
  return (
    <motion.article
      className="project-card"
      variants={cardVariants}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      onClick={() => onClick(project)}
    >
      {project.image && (
        <div className="project-image-wrap">
          <img src={project.image} alt={project.title} className="project-thumbnail" loading="lazy" />
        </div>
      )}
      <div className="project-top">
        <div className="project-folder">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d={ICONS.folder} />
          </svg>
        </div>
        <div className="project-links">
          <a href={project.github} target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer" aria-label="GitHub" onClick={(e) => e.stopPropagation()}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d={ICONS.github} />
            </svg>
          </a>
          <a href={project.live} target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer" aria-label="Live demo" onClick={(e) => e.stopPropagation()}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d={ICONS.external} /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>
      </div>
      <h3 className="project-title">{project.title}</h3>
      <p className="project-tagline">{project.tagline}</p>
      <p className="project-desc">{project.description}</p>
      <div className="project-tech">
        {project.tech.map((t) => (
          <span key={t} className="tech-tag">{t}</span>
        ))}
      </div>
    </motion.article>
  );
});

export default function Projects() {
  const { ref, controls } = useScrollReveal();
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="section projects-section">
      <motion.div
        ref={ref}
        variants={revealVariants}
        initial="hidden"
        animate={controls}
      >
        <h2 className="section-label">Featured Work</h2>
        <h3 className="section-title">
          Case studies that showcase
          <span className="gradient-text"> impact & execution</span>
        </h3>
        <p className="section-desc">
          Click any project to read the full case study.
        </p>
      </motion.div>

      <motion.div
        className="projects-grid"
        variants={staggerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onClick={setSelected} />
        ))}
      </motion.div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
