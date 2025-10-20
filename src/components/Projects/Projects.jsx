// src/components/Projects/Projects.jsx
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { allProjects } from "../Projects/ProjectData";

export default function Projects() {
  const [filter, setFilter] = useState("newest");
  const filtered =
    filter === "newest" ? allProjects : allProjects.filter((p) => p.type === filter);

  return (
    <section className="bg-white rounded-xl shadow-sm p-6 md:p-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h3 className="text-2xl font-semibold text-[#1B3C53]">Projects</h3>
        <div className="flex gap-2 mt-3 md:mt-0">
          {["newest", "website", "mobileapp"].map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`px-4 py-1.5 text-sm rounded-full font-medium transition-colors ${
                filter === t
                  ? "bg-[#1B3C53] text-white"
                  : "bg-[#F9F3EF] text-[#1B3C53] hover:bg-[#d2c1b6]/40"
              }`}
            >
              {t === "newest" ? "Newest" : t === "mobileapp" ? "Mobile App" : "Website"}
            </button>
          ))}
        </div>
      </div>

      {/* Project Cards */}
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
        {filtered.map((p) => (
          <ProjectCard key={p.id} {...p} />
        ))}
      </div>
    </section>
  );
}
