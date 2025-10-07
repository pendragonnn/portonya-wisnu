import React, { useState } from "react";
import { FiGithub, FiLinkedin, FiMail, FiMenu, FiX } from "react-icons/fi";
import profilePic from "../assets/profile.jpg";

const menu = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Sidebar({ activeTab, setActiveTab }) {
  const [openMobile, setOpenMobile] = useState(false);

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className="hidden md:fixed md:inset-y-0 md:left-0 md:w-72 md:flex md:flex-col md:justify-between md:pt-8 md:px-6 bg-white shadow-sm"
        aria-label="Sidebar"
      >
        <div>
          {/* Profile */}
          <div className="flex flex-col items-center">
            <img
              src={profilePic}
              alt="Profile"
              className="w-36 h-36 rounded-full object-cover shadow-md"
            />
            <h2 className="mt-4 text-xl font-semibold text-[#1B3C53]">[Your Name]</h2>
            <p className="mt-2 text-center text-sm text-[#1B3C53]/80 max-w-[220px]">
              Fullstack & Mobile Developer — seeking internship & freelance projects.
            </p>
          </div>

          {/* Menu */}
          <nav className="mt-8">
            <ul className="flex flex-col gap-1">
              {menu.map((m) => (
                <li
                  key={m.id}
                  onClick={() => setActiveTab(m.id)}
                  className={`cursor-pointer px-3 py-2 rounded-md text-sm font-medium ${
                    activeTab === m.id
                      ? "bg-[#d2c1b6] text-white"
                      : "text-[#1B3C53] hover:bg-[#f1e9e3]"
                  }`}
                >
                  {m.label}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Socials at bottom */}
        <div className="mb-6 flex flex-col items-center gap-3">
          <div className="flex gap-4">
            <a href="#" aria-label="Github" className="p-2 rounded-md hover:bg-gray-100">
              <FiGithub size={20} />
            </a>
            <a href="#" aria-label="LinkedIn" className="p-2 rounded-md hover:bg-gray-100">
              <FiLinkedin size={20} />
            </a>
            <a href="mailto:your@email.com" aria-label="Email" className="p-2 rounded-md hover:bg-gray-100">
              <FiMail size={20} />
            </a>
          </div>
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} Your Name</p>
        </div>
      </aside>

      {/* Mobile top bar (collapsible) */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <img
              src="https://via.placeholder.com/48"
              alt="profile"
              className="w-12 h-12 rounded-full object-cover shadow-sm"
            />
            <div>
              <div className="text-sm font-semibold text-[#1B3C53]">[Your Name]</div>
              <div className="text-xs text-[#1B3C53]/70">Developer</div>
            </div>
          </div>

          <button
            onClick={() => setOpenMobile((s) => !s)}
            className="p-2 rounded-md"
            aria-label="Toggle menu"
          >
            {openMobile ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>

        {/* collapsible menu */}
        {openMobile && (
          <div className="px-4 pb-4">
            <nav className="flex flex-col gap-2">
              {menu.map((m) => (
                <button
                  key={m.id}
                  onClick={() => {
                    setActiveTab(m.id);
                    setOpenMobile(false);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className={`text-left px-3 py-2 rounded-md text-sm font-medium ${
                    activeTab === m.id ? "bg-[#d2c1b6] text-white" : "text-[#1B3C53]"
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </nav>

            <div className="mt-4 flex gap-4">
              <a href="#" className="p-2 rounded-md hover:bg-gray-100"><FiGithub /></a>
              <a href="#" className="p-2 rounded-md hover:bg-gray-100"><FiLinkedin /></a>
              <a href="#" className="p-2 rounded-md hover:bg-gray-100"><FiMail /></a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
