import React, { useState } from "react";
import { FiGithub, FiLinkedin, FiMail, FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
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
        className="hidden md:fixed md:inset-y-0 md:left-0 md:w-72 md:flex md:flex-col md:justify-between md:pt-8 md:px-6 bg-gradient-to-b from-white via-[#F9F3EF]/20 to-white shadow-xl"
        aria-label="Sidebar"
      >
        <div>
          {/* Profile Section with Gradient Border */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#1B3C53] to-[#F9B572] rounded-full blur-md opacity-40"></div>
              <img
                src={profilePic}
                alt="Profile"
                className="relative w-36 h-36 rounded-full object-cover shadow-lg ring-4 ring-white"
              />
              <div className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-br from-[#F9B572] to-[#f5a755] rounded-full border-4 border-white shadow-md"></div>
            </div>
            
            <h2 className="mt-5 text-2xl font-bold text-[#1B3C53]">Wisnu Andika</h2>
            
            <div className="mt-3 px-4 py-2 bg-gradient-to-r from-[#1B3C53] to-[#2d5573] rounded-full shadow-md">
              <p className="text-center italic font-semibold text-sm text-white">
                Software Engineer Enthusiast
              </p>
            </div>
            
            <div className="mt-3 px-4 py-2 bg-[#F9F3EF] rounded-lg border border-[#F9B572]/30 shadow-sm">
              <p className="text-center text-sm text-[#1B3C53]/90 max-w-[220px] leading-relaxed">
                Seeking for job opportunities & freelance projects.
              </p>
            </div>
          </motion.div>

          {/* Menu with Enhanced Styling */}
          <nav className="mt-8">
            <ul className="flex flex-col gap-2">
              {menu.map((m, index) => (
                <motion.li
                  key={m.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onClick={() => setActiveTab(m.id)}
                  className={`cursor-pointer px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-300 relative overflow-hidden group ${
                    activeTab === m.id
                      ? "bg-gradient-to-r from-[#1B3C53] to-[#2d5573] text-white shadow-md"
                      : "text-[#1B3C53] hover:bg-[#F9F3EF] hover:shadow-sm"
                  }`}
                >
                  {activeTab === m.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-[#1B3C53] to-[#2d5573]"
                      transition={{ type: "spring", duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center justify-between">
                    {m.label}
                    {activeTab === m.id && (
                      <span className="w-2 h-2 bg-[#F9B572] rounded-full"></span>
                    )}
                  </span>
                  
                  {/* Hover Effect Border */}
                  {activeTab !== m.id && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#F9B572] to-[#f5a755] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top rounded-full"></div>
                  )}
                </motion.li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Enhanced Socials Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-6 flex flex-col items-center gap-4"
        >
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#1B3C53]/20 to-transparent"></div>
          
          <div className="flex gap-3">
            <motion.a 
              href="https://github.com/pendragonnn" 
              target="_blank" 
              aria-label="Github"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-lg bg-gradient-to-br from-[#1B3C53] to-[#2d5573] text-white hover:shadow-lg transition-shadow"
            >
              <FiGithub size={20} />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/wisnuandika/" 
              target="_blank" 
              aria-label="LinkedIn"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-lg bg-gradient-to-br from-[#0077b5] to-[#005885] text-white hover:shadow-lg transition-shadow"
            >
              <FiLinkedin size={20} />
            </motion.a>
            <motion.a 
              href="mailto:wisnuandika104@gmail.com" 
              target="_blank" 
              aria-label="Email"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-lg bg-gradient-to-br from-[#F9B572] to-[#f5a755] text-white hover:shadow-lg transition-shadow"
            >
              <FiMail size={20} />
            </motion.a>
          </div>
          
          <p className="text-xs text-[#1B3C53]/60 font-medium">
            © {new Date().getFullYear()} Mamank Kesbor
          </p>
        </motion.div>
      </aside>

      {/* Enhanced Mobile Header */}
      <header className="md:hidden sticky top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md shadow-lg border-b border-[#1B3C53]/10">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#1B3C53] to-[#F9B572] rounded-full blur-sm opacity-40"></div>
              <img
                src={profilePic}
                alt="profile"
                className="relative w-12 h-12 rounded-full object-cover shadow-md ring-2 ring-white"
              />
            </div>
            <div>
              <div className="text-sm font-bold text-[#1B3C53]">Wisnu Andika</div>
              <div className="text-xs text-[#1B3C53]/70 font-medium">Software Engineer</div>
            </div>
          </div>

          <motion.button
            onClick={() => setOpenMobile((s) => !s)}
            className="p-2 rounded-lg bg-[#F9F3EF] hover:bg-[#F9B572]/20 transition-colors"
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            {openMobile ? <FiX size={22} className="text-[#1B3C53]" /> : <FiMenu size={22} className="text-[#1B3C53]" />}
          </motion.button>
        </div>

        {/* Enhanced Mobile Menu with Animation */}
        <AnimatePresence>
          {openMobile && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="px-4 pb-4 bg-gradient-to-b from-white to-[#F9F3EF]/30"
            >
              <nav className="flex flex-col gap-2">
                {menu.map((m, index) => (
                  <motion.button
                    key={m.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    onClick={() => {
                      setActiveTab(m.id);
                      setOpenMobile(false);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className={`text-left px-4 py-3 rounded-lg text-sm font-semibold transition-all ${
                      activeTab === m.id 
                        ? "bg-gradient-to-r from-[#1B3C53] to-[#2d5573] text-white shadow-md" 
                        : "text-[#1B3C53] bg-white hover:bg-[#F9F3EF] border border-[#1B3C53]/10"
                    }`}
                  >
                    <span className="flex items-center justify-between">
                      {m.label}
                      {activeTab === m.id && (
                        <span className="w-2 h-2 bg-[#F9B572] rounded-full"></span>
                      )}
                    </span>
                  </motion.button>
                ))}
              </nav>

              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="mt-4 pt-4 border-t border-[#1B3C53]/10"
              >
                <div className="flex gap-3 justify-center">
                  <a 
                    href="https://github.com/pendragonnn" 
                    target="_blank"
                    className="p-3 rounded-lg bg-gradient-to-br from-[#1B3C53] to-[#2d5573] text-white hover:shadow-md transition-shadow"
                  >
                    <FiGithub size={18} />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/wisnuandika/" 
                    target="_blank"
                    className="p-3 rounded-lg bg-gradient-to-br from-[#0077b5] to-[#005885] text-white hover:shadow-md transition-shadow"
                  >
                    <FiLinkedin size={18} />
                  </a>
                  <a 
                    href="mailto:wisnuandika104@gmail.com" 
                    target="_blank"
                    className="p-3 rounded-lg bg-gradient-to-br from-[#F9B572] to-[#f5a755] text-white hover:shadow-md transition-shadow"
                  >
                    <FiMail size={18} />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}