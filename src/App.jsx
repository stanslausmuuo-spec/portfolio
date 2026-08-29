import { lazy, Suspense, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";

const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));
const Contact = lazy(() => import("./components/Contact"));

export default function App() {
  const mainRef = useRef(null);

  return (
    <>
      <ScrollProgress containerRef={mainRef} />
      <Navbar containerRef={mainRef} />
      <main ref={mainRef}>
        <Suspense fallback={null}>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </Suspense>
      </main>
    </>
  );
}
