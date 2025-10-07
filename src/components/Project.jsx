import React, { useState } from "react";

const allProjects = [
  { id: 1, title: "Portfolio Website", type: "website", desc: "Personal portfolio built with React & Tailwind" },
  { id: 2, title: "TeaGuard Mobile App", type: "mobileapp", desc: "Plant disease detector (mobile)" },
  { id: 3, title: "Library System", type: "website", desc: "CRUD system for library management" },
];

export default function Projects() {
  const [filter, setFilter] = useState("newest");

  const filtered =
    filter === "newest" ? allProjects : allProjects.filter((p) => p.type === filter);

  return (
    <section className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-2xl font-semibold">Projects</h3>
        <div className="flex gap-2">
          {["newest", "website", "mobileapp"].map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`px-3 py-1 text-sm rounded-full font-medium ${
                filter === t ? "bg-[#1B3C53] text-white" : "bg-gray-100 text-[#1B3C53]"
              }`}
            >
              {t === "newest" ? "Newest" : t === "mobileapp" ? "Mobile App" : "Website"}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {filtered.map((p) => (
          <article key={p.id} className="p-4 border rounded-lg bg-[#faf7f5]">
            <h4 className="font-semibold">{p.title}</h4>
            <p className="text-sm text-[#1B3C53]/80 mt-2">{p.desc}</p>
            <div className="mt-3 text-xs text-gray-500">Type: {p.type}</div>
          </article>
        ))}
      </div>
    </section>
  );
}
