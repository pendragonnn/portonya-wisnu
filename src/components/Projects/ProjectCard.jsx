// src/components/Projects/ProjectCard.jsx
import React from "react";

export default function ProjectCard({
  title,
  company,
  date,
  desc,
  tech,
  link,
  category,
}) {
  return (
    <article className="p-6 rounded-xl border border-[#d2c1b6]/40 bg-[#F9F3EF]/60 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
      {/* Category Badge */}
      <div className="mb-2">
        <span className="inline-block px-2 py-1 text-xs font-medium capitalize bg-[#1B3C53]/10 text-[#1B3C53] rounded-md">
          {category}
        </span>
      </div>

      {/* Title & Company */}
      <h4 className="font-semibold text-[#1B3C53] text-lg leading-snug">
        {title}
      </h4>
      {company && (
        <p className="text-sm text-[#1B3C53]/70 mt-0.5">{company}</p>
      )}

      {/* Date */}
      <p className="text-xs text-[#1B3C53]/60 mt-1 mb-3">{date}</p>

      {/* Description */}
      <p className="text-sm text-[#1B3C53]/80 leading-relaxed mb-4">{desc}</p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t) => (
          <span
            key={t}
            className="px-2 py-1 text-xs bg-[#1B3C53]/10 text-[#1B3C53] rounded-md"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Project Link */}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-sm font-medium text-[#1B3C53] hover:underline hover:text-[#1B3C53]/80 transition-colors"
        >
          Visit Project →
        </a>
      )}
    </article>
  );
}
