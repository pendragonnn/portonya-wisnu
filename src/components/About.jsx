import React from "react";

export default function About() {
  return (
    <section className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-2xl font-semibold mb-3">About Me</h3>
      <p className="text-[#1B3C53]/80 mb-4">
        [Masukkan ringkasan pendidikan dan pengalamanmu di sini—contoh template:]
      </p>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <h4 className="font-semibold">Education</h4>
          <p className="text-sm text-[#1B3C53]/80">Bachelor of Computer Science — Universitas ...</p>
        </div>
        <div>
          <h4 className="font-semibold">Bootcamps & Courses</h4>
          <p className="text-sm text-[#1B3C53]/80">Fullstack Web Dev Bootcamp — ABC Academy</p>
        </div>
      </div>
    </section>
  );
}
