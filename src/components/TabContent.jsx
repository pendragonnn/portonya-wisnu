import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import About from "./About";
import Projects from "./Project";
import Skills from "./Skills";
import Contact from "./Contact";

const variants = {
  enter: { opacity: 0, x: 30, scale: 0.98 },
  center: { opacity: 1, x: 0, scale: 1 },
  exit: { opacity: 0, x: -30, scale: 0.98 },
};

export default function TabContent({ activeTab }) {
  return (
    <div className="max-w-4xl mx-auto">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={activeTab}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.45 }}
        >
          {activeTab === "about" && <About />}
          {activeTab === "projects" && <Projects />}
          {activeTab === "skills" && <Skills />}
          {activeTab === "contact" && <Contact />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
