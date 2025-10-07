import React from "react";

const skills = [
  "HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Node.js", "Express",
  "MySQL", "Firebase", "Flutter"
];

export default function Skills() {
  return (
    <section className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-2xl font-semibold mb-4">Skills</h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((s) => (
          <span key={s} className="px-3 py-2 rounded-full bg-[#f3efe9] text-sm font-medium">
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}
