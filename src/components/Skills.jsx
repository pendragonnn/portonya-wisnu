import React from "react";
import { FaLaptopCode, FaCertificate } from "react-icons/fa";
import skillsPic from "../assets/skillBootcamp.png";

const skills = [
  "HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Node.js", "Express",
  "MySQL", "Firebase", "Flutter", "Python"
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
      {/* Education & Bootcamp */}
      <div className="my-5">
        <div className="bg-[#F9F3EF] rounded-lg p-6 shadow-sm border border-[#d2c1b6]/30">
          <div className="flex items-center gap-2 mb-3">
            <FaLaptopCode className="text-[#1B3C53]" />
            <h4 className="font-semibold text-lg text-[#1B3C53]">Bootcamp Experience</h4>
          </div>

          <p className="text-sm font-medium text-[#1B3C53]">
            Rakamin Academy — Fullstack Web Development
          </p>
          <p className="text-xs text-[#1B3C53]/70 mb-3">August 2023 – December 2023</p>

          <p className="text-sm text-[#1B3C53]/80 leading-relaxed mb-2">
            Completed a 4-month intensive Fullstack Web Development program focusing on building end-to-end web
            applications using <span className="font-medium">Next.js</span> for the frontend and
            <span className="font-medium"> Express.js with PostgreSQL</span> for the backend. Actively contributed to designing,
            developing, and implementing web features while applying clean code principles and collaborative development
            practices through Git.
          </p>

          <p className="text-sm text-[#1B3C53]/80 leading-relaxed">
            Graduated with distinction as the <span className="font-medium">Most Outstanding Student of Major</span> and ranked as one
            of the <span className="font-medium">Top 4 Students of MSIB Batch 5 Rakamin Academy</span> with a final score of <span className="font-medium">90.05</span>.
            Additionally, achieved <span className="font-medium">Runner-up of Best Final Project Team</span> through
            <span className="italic"> Shoestock</span>, a web-based shoe product management application developed collaboratively to
            optimize inventory and sales processes.
          </p>

          <img src={skillsPic} alt="Rakamin Bootcamp Awards" className="mt-4 rounded-md shadow-sm" />
        </div>
      </div>
      {/* Certification */}
      <div className="bg-[#F9F3EF] rounded-lg p-6 shadow-sm border border-[#d2c1b6]/30">
        <div className="flex items-center gap-2 mb-3">
          <FaCertificate className="text-[#1B3C53]" />
          <h4 className="font-semibold text-lg text-[#1B3C53]">Certification</h4>
        </div>
        <p className="text-sm font-medium text-[#1B3C53]">
          Junior Programmer Assistant — BNSP
        </p>
        <p className="text-xs text-[#1B3C53]/70 mb-3">
          Issued: July 2024 – Valid until: July 2027
        </p>
        <ul className="list-disc list-inside text-sm text-[#1B3C53]/80 space-y-1">
          <li>Configured and optimized programming environments for cross-platform development.</li>
          <li>Designed and tested object-oriented applications focused on clean UI and code quality.</li>
        </ul>
      </div>
    </section>
  );
}
