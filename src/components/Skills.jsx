import React from "react";
import { 
  FaLaptopCode, 
  FaCertificate, 
  FaTrophy,
  FaStar,
} from "react-icons/fa";
import skillsPic from "../assets/skillBootcamp.png";
import { motion, AnimatePresence } from "framer-motion";

const skills = [
  "HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Node.js", "Express",
  "MySQL", "Flutter", "Python"
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section className="bg-gradient-to-br from-white via-[#F9F3EF]/20 to-white rounded-2xl shadow-lg p-6 md:p-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h3 className="text-3xl md:text-4xl font-bold text-[#1B3C53] mb-2 flex items-center gap-3">
          <div className="w-2 h-8 bg-gradient-to-b from-[#F9B572] to-[#f5a755] rounded-full"></div>
          Skills & Expertise
        </h3>
        <p className="text-sm text-[#1B3C53]/70 ml-5">
          Technologies and tools I work with
        </p>
        <div className="mt-4 h-px bg-gradient-to-r from-transparent via-[#1B3C53]/20 to-transparent"></div>
      </motion.div>

      {/* Skills Tags */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap gap-3 mb-8"
      >
        {skills.map((s) => (
          <motion.span
            key={s}
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -2 }}
            className="px-4 py-2.5 rounded-xl bg-white text-sm font-semibold text-[#1B3C53] border border-[#1B3C53]/20 hover:border-[#F9B572]/50 hover:bg-[#F9B572]/10 transition-all shadow-sm hover:shadow-md cursor-default"
          >
            {s}
          </motion.span>
        ))}
      </motion.div>

      {/* Bootcamp Experience */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-6"
      >
        <div className="bg-gradient-to-br from-white to-[#F9F3EF]/50 rounded-xl p-6 md:p-8 shadow-md border border-[#1B3C53]/10 relative overflow-hidden group hover:shadow-xl transition-shadow duration-500">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#F9B572]/10 to-transparent rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-500"></div>
          
          <div className="relative z-10">
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-br from-[#1B3C53] to-[#2d5573] rounded-lg shadow-md">
                <FaLaptopCode className="text-white text-xl" />
              </div>
              <div>
                <h4 className="font-bold text-xl text-[#1B3C53]">Bootcamp Experience</h4>
                <div className="flex items-center gap-2 mt-1">
                  <FaTrophy className="text-[#F9B572] text-sm" />
                  <span className="text-xs font-semibold text-[#F9B572]">Outstanding Graduate</span>
                </div>
              </div>
            </div>

            {/* Institution */}
            <div className="mb-4 pb-4 border-b border-[#1B3C53]/10">
              <p className="font-semibold text-[#1B3C53] text-base md:text-lg">
                Rakamin Academy - Fullstack Web Development
              </p>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-1 h-1 bg-[#1B3C53]/40 rounded-full"></div>
                <p className="text-xs text-[#1B3C53]/60 font-medium">August 2023 – December 2023</p>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4 mb-6">
              <p className="text-sm text-[#1B3C53]/80 leading-relaxed">
                Completed a 4-month intensive Fullstack Web Development program focusing on building end-to-end web
                applications using <span className="font-semibold text-[#1B3C53]">Next.js</span> for the frontend and
                <span className="font-semibold text-[#1B3C53]"> Express.js with PostgreSQL</span> for the backend. Actively contributed to designing,
                developing, and implementing web features while applying clean code principles and collaborative development
                practices through Git.
              </p>

              {/* Achievement Highlights */}
              <div className="bg-white/70 rounded-lg p-4 border border-[#F9B572]/20">
                <div className="flex items-start gap-2 mb-2">
                  <FaStar className="text-[#F9B572] mt-1 flex-shrink-0" />
                  <p className="text-sm text-[#1B3C53]/80 leading-relaxed">
                    Graduated with distinction as the <span className="font-semibold text-[#1B3C53]">Most Outstanding Student of Major</span> and ranked as one
                    of the <span className="font-semibold text-[#1B3C53]">Top 4 Students of MSIB Batch 5 Rakamin Academy</span> with a final score of <span className="font-semibold text-[#1B3C53]">90.05</span>.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <FaTrophy className="text-[#F9B572] mt-1 flex-shrink-0" />
                  <p className="text-sm text-[#1B3C53]/80 leading-relaxed">
                    Achieved <span className="font-semibold text-[#1B3C53]">Runner-up of Best Final Project Team</span> through
                    <span className="italic font-medium"> Shoestock</span>, a web-based shoe product management application developed collaboratively to
                    optimize inventory and sales processes.
                  </p>
                </div>
              </div>
            </div>

            {/* Image */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="rounded-lg overflow-hidden shadow-lg border border-[#1B3C53]/10"
            >
              <img src={skillsPic} alt="Rakamin Bootcamp Awards" className="w-full" />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Certification */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="bg-gradient-to-br from-[#F9F3EF] to-white rounded-xl p-6 md:p-8 shadow-md border border-[#F9B572]/20 relative overflow-hidden group hover:shadow-xl transition-shadow duration-500">
          {/* Decorative Elements */}
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-[#1B3C53]/5 to-transparent rounded-full -ml-20 -mb-20 group-hover:scale-150 transition-transform duration-500"></div>
          
          <div className="relative z-10">
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-br from-[#F9B572] to-[#f5a755] rounded-lg shadow-md">
                <FaCertificate className="text-white text-xl" />
              </div>
              <h4 className="font-bold text-xl text-[#1B3C53]">Certification</h4>
            </div>

            {/* Certification Details */}
            <div className="mb-4">
              <p className="font-semibold text-[#1B3C53] text-base md:text-lg">
                Junior Programmer Assistant — BNSP
              </p>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-1 h-1 bg-[#1B3C53]/40 rounded-full"></div>
                <p className="text-xs text-[#1B3C53]/60 font-medium">
                  Issued: July 2024 - Valid until: July 2027
                </p>
              </div>
            </div>

            {/* Competencies */}
            <div className="space-y-2">
              <div className="flex items-start gap-3 bg-white/70 rounded-lg p-3 border border-[#F9B572]/20">
                <div className="w-1.5 h-1.5 bg-[#F9B572] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-[#1B3C53]/80">
                  Configured and optimized programming environments for cross-platform development.
                </p>
              </div>
              <div className="flex items-start gap-3 bg-white/70 rounded-lg p-3 border border-[#F9B572]/20">
                <div className="w-1.5 h-1.5 bg-[#F9B572] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-[#1B3C53]/80">
                  Designed and tested object-oriented applications focused on clean UI and code quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
