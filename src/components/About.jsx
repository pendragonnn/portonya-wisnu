import React from "react";
import { FaMedal, FaUserGraduate, FaLaptopCode, FaCertificate } from "react-icons/fa";

export default function About() {
  return (
    <section className="bg-white rounded-xl shadow-sm p-8 md:p-10">
      {/* Intro Section */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-10 mb-12">
        <div className="flex-1">
          <p className="text-[#1B3C53]/80 leading-relaxed">
            I’m a fresh graduate Informatics student from
            <span className="font-semibold"> Universitas Pembangunan Nasional “Veteran” Jakarta</span>.
            I’m deeply passionate about crafting interactive, user-focused digital experiences
            mainly through <span className="font-semibold">web development</span>, but I also explore
            <span className="font-semibold"> mobile applications</span> and <span className="font-semibold">machine learning</span> when a project calls for it.
          </p>

          <br />

          <p className="text-[#1B3C53]/80 leading-relaxed">
            Over the past few years, I’ve been involved in various learning and development programs that shaped my skills as a software engineer. I led a team during a Fullstack Web Development Bootcamp under the Kampus Merdeka program by Rakamin Academy, where we built a complete web application as our final project. After that, I joined two project-based virtual internships with Core Initiative and Qwords, where I contributed to building and improving real-world web products.
          </p>

          <p className="mt-4 text-[#1B3C53]/80 leading-relaxed">
            One of my most meaningful experiences came from leading a government-funded project through the Student Creativity Program (PKM-KC) under the Ministry of Education. As the team leader, I guided the development of TeaGuard, a mobile-based application designed to detect pests and diseases in tea plants using machine learning. The project received official research funding and, later, our team represented it in a national digital poster competition held during the 37th National Student Science Week (PIMNAS) at Airlangga University where we proudly earned 2nd place.
          </p>

          <p className="mt-4 text-[#1B3C53]/80 leading-relaxed">
            More recently, I’ve also worked on several paid freelance projects, working directly with peers and clients to build fully functional web applications.
            And Now I’m currently seeking an <span className="font-semibold">internship opportunity </span>
            where I can contribute, grow, and keep building things that truly make an impact.
          </p>
        </div>
      </div>

      {/* Education & Bootcamp */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div className="bg-[#F9F3EF] rounded-lg p-6 shadow-sm border border-[#d2c1b6]/30">
          <div className="flex items-center gap-2 mb-3">
            <FaUserGraduate className="text-[#1B3C53]" />
            <h4 className="font-semibold text-lg text-[#1B3C53]">Education</h4>
          </div>
          <p className="text-sm font-medium text-[#1B3C53]">
            Universitas Pembangunan Nasional "Veteran" Jakarta
          </p>
          <p className="text-sm text-[#1B3C53]/80">
            Bachelor of Informatics - GPA 3.92
          </p>
          <p className="text-xs text-[#1B3C53]/70 mb-3">Aug 2021 – Sept 2025</p>
          <ul className="list-disc list-inside text-sm text-[#1B3C53]/80 space-y-1">
            <li>Developing a solid foundation in computer science and software engineering principles.</li>
            <li>Specialized in building efficient and user-friendly web applications.</li>
          </ul>
        </div>

        {/* Achievements */}
        <div className="bg-[#F9F3EF] rounded-lg p-6 shadow-sm border border-[#d2c1b6]/30 mb-10">
          <div className="flex items-center gap-2 mb-3">
            <FaMedal className="text-[#1B3C53]" />
            <h4 className="font-semibold text-lg text-[#1B3C53]">Achievements</h4>
          </div>
          <ul className="list-disc list-inside text-sm text-[#1B3C53]/80 space-y-2">
            <li>
              <span className="font-medium">Research Grant Awardee (PKM-KC, 2023–2024)</span> -
              Led <span className="italic">TeaGuard</span>, a mobile app for detecting pests and diseases in tea plants
              using machine learning. Responsible for research, app design, and prototype development.
            </li>
            <li>
              <span className="font-medium">2nd Place Winner (PIMNAS 37, 2024)</span> -
              Presented <span className="italic">TeaGuard</span> research findings in a national digital poster competition
              held by Universitas Airlangga, earning national recognition.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
