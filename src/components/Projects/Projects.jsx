// src/components/Projects/Projects.jsx
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { allProjects } from "../Projects/ProjectData";
import { FiCode, FiSmartphone, FiFilter } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";


export default function Projects() {
  const [filter, setFilter] = useState("newest");

  const filtered =
    filter === "newest" ? allProjects : allProjects.filter((p) => p.type === filter);

  const filterOptions = [
    { value: "newest", label: "All Projects", icon: FiFilter },
    { value: "website", label: "Websites", icon: FiCode },
    { value: "mobileapp", label: "Mobile Apps", icon: FiSmartphone }
  ];

  return (
    <section className="bg-gradient-to-br from-white via-[#F9F3EF]/20 to-white rounded-2xl shadow-lg p-6 md:p-10">
      {/* Enhanced Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-[#1B3C53] mb-2 flex items-center gap-3">
              <div className="w-2 h-8 bg-gradient-to-b from-[#F9B572] to-[#f5a755] rounded-full"></div>
              Projects Showcase
            </h3>
            <p className="text-sm text-[#1B3C53]/70 ml-5">
              {filtered.length} {filtered.length === 1 ? 'project' : 'projects'} found
            </p>
          </div>
          
          {/* Enhanced Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {filterOptions.map(({ value, label, icon: Icon }) => (
              <motion.button
                key={value}
                onClick={() => setFilter(value)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex items-center gap-2 px-4 py-2.5 text-sm rounded-xl font-semibold transition-all duration-300 ${
                  filter === value
                    ? "bg-gradient-to-r from-[#1B3C53] to-[#2d5573] text-white shadow-lg shadow-[#1B3C53]/20"
                    : "bg-white text-[#1B3C53] hover:bg-[#F9F3EF] border border-[#1B3C53]/20 hover:border-[#F9B572]/40"
                }`}
              >
                <Icon size={16} />
                {label}
              </motion.button>
            ))}
          </div>
        </div>
        
        {/* Decorative Line */}
        <div className="mt-6 h-px bg-gradient-to-r from-transparent via-[#1B3C53]/20 to-transparent"></div>
      </motion.div>

      {/* Project Cards Grid with Animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          {filtered.map((p, index) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ProjectCard {...p} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Empty State */}
      {filtered.length === 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center py-16 px-4"
        >
          <div className="w-20 h-20 bg-[#F9F3EF] rounded-full flex items-center justify-center mb-4">
            <FiFilter size={32} className="text-[#1B3C53]/40" />
          </div>
          <h4 className="text-lg font-semibold text-[#1B3C53] mb-2">No projects found</h4>
          <p className="text-sm text-[#1B3C53]/60 text-center max-w-md">
            Try selecting a different filter to see more projects.
          </p>
        </motion.div>
      )}
    </section>
  );
}
