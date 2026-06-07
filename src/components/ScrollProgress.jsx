import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress({ containerRef }) {
  const { scrollYProgress } = useScroll({ container: containerRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return <motion.div className="scroll-progress" style={{ scaleX }} />;
}
