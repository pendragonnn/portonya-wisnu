// src/components/Projects/ProjectCard.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSmartphone, FiExternalLink, FiCode} from "react-icons/fi";
import { BsFillLaptopFill } from "react-icons/bs";

export default function ProjectCard({
  title,
  company,
  date,
  desc,
  tech,
  link,
  category,
  type
}) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -8 }}
      className="group relative p-6 rounded-2xl border border-[#1B3C53]/10 bg-gradient-to-br from-white via-[#F9F3EF]/30 to-white hover:shadow-2xl hover:border-[#F9B572]/30 transition-all duration-500 overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#F9B572]/10 to-transparent rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#1B3C53]/5 to-transparent rounded-full -ml-12 -mb-12 group-hover:scale-150 transition-transform duration-500"></div>
      
      <div className="relative z-10">
        {/* Category Badge with Icon */}
        <div className="flex items-center justify-between mb-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold capitalize bg-gradient-to-r from-[#1B3C53]/10 to-[#2d5573]/10 text-[#1B3C53] rounded-full border border-[#1B3C53]/20">
            {type === 'website' ? <BsFillLaptopFill size={12} /> : <FiSmartphone size={12} />}
            {category}
          </span>
          
          {/* Hover indicator */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            className="w-2 h-2 bg-[#F9B572] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          />
        </div>

        {/* Title & Company */}
        <h4 className="font-bold text-[#1B3C53] text-lg md:text-xl leading-snug mb-1 group-hover:text-[#2d5573] transition-colors">
          {title}
        </h4>
        {company && (
          <p className="text-sm font-medium text-[#F9B572] mt-1">{company}</p>
        )}

        {/* Date with Icon */}
        <div className="flex items-center gap-1.5 mt-2 mb-4">
          <div className="w-1 h-1 bg-[#1B3C53]/40 rounded-full"></div>
          <p className="text-xs text-[#1B3C53]/60 font-medium">{date}</p>
        </div>

        {/* Description */}
        <p className="text-sm text-[#1B3C53]/80 leading-relaxed mb-5 line-clamp-3">
          {desc}
        </p>

        {/* Tech Stack with Enhanced Styling */}
        <div className="flex flex-wrap gap-2 mb-5">
          {tech.map((t, index) => (
            <motion.span
              key={t}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="px-3 py-1 text-xs font-medium bg-white/80 text-[#1B3C53] rounded-full border border-[#1B3C53]/20 hover:border-[#F9B572]/50 hover:bg-[#F9B572]/10 transition-all"
            >
              {t}
            </motion.span>
          ))}
        </div>

        {/* Project Link with Enhanced Button */}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-[#1B3C53] to-[#2d5573] rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 group/link"
          >
            Visit Project
            <FiExternalLink className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" size={16} />
          </a>
        )}
      </div>

      {/* Animated Border on Hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#F9B572]/20 via-transparent to-[#1B3C53]/20 blur-xl"></div>
      </div>
    </motion.article>
  );

}
