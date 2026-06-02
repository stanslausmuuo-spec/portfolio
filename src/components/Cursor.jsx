import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const HOVER_SELECTOR = "a, button, .project-card, .btn, .skill-category, .contact-link, .theme-toggle";

export default function Cursor() {
  const visible = useRef(false);
  const [hovering, setHovering] = useState(false);
  const [show, setShow] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springX = useSpring(cursorX, { stiffness: 500, damping: 28 });
  const springY = useSpring(cursorY, { stiffness: 500, damping: 28 });

  useEffect(() => {
    let hoveredEl = null;

    const onMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible.current) {
        visible.current = true;
        setShow(true);
      }
    };

    const onOver = (e) => {
      const el = e.target.closest(HOVER_SELECTOR);
      if (el && el !== hoveredEl) {
        hoveredEl = el;
        setHovering(true);
      }
    };

    const onOut = (e) => {
      if (hoveredEl && !hoveredEl.contains(e.relatedTarget)) {
        hoveredEl = null;
        setHovering(false);
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("mouseout", onOut, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className={`cursor-dot${hovering ? " cursor-hover" : ""}`}
      style={{
        translateX: springX,
        translateY: springY,
        opacity: show ? 1 : 0,
      }}
    />
  );
}
