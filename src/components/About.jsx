import React from "react";
import { FaMedal, FaUserGraduate, FaLaptopCode, FaCertificate, FaAward, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="bg-gradient-to-br from-white via-[#F9F3EF]/30 to-white rounded-2xl shadow-lg p-6 md:p-10 lg:p-12">
      {/* Hero Section with Gradient Background */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative mb-12 p-8 rounded-xl bg-gradient-to-r from-[#1B3C53] to-[#2d5573] text-white overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24"></div>
        
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
            <FaRocket className="text-[#F9B572]" />
            About Me
          </h2>
          <div className="w-20 h-1 bg-[#F9B572] rounded-full mb-6"></div>
          <p className="text-white/90 text-lg leading-relaxed max-w-4xl">
            Fresh Graduate | Fullstack Developer | Machine Learning Enthusiast
          </p>
        </div>
      </motion.div>

      {/* Main Content */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6 mb-12"
      >
        <motion.div variants={itemVariants} className="prose prose-lg max-w-none">
          <p className="text-[#1B3C53]/90 leading-relaxed text-base md:text-lg">
            I'm a fresh graduate Informatics student from
            <span className="font-semibold text-[#1B3C53]"> Universitas Pembangunan Nasional "Veteran" Jakarta</span>.
            I'm deeply passionate about crafting interactive, user-focused digital experiences
            mainly through <span className="font-semibold text-[#1B3C53]">web development</span>, but I also explore
            <span className="font-semibold text-[#1B3C53]"> mobile applications</span> and <span className="font-semibold text-[#1B3C53]">machine learning</span> when a project calls for it.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-gradient-to-r from-[#F9F3EF] to-[#FFF5EB] rounded-xl p-6 border-l-4 border-[#F9B572] shadow-sm">
          <p className="text-[#1B3C53]/90 leading-relaxed text-base">
            Over the past few years, I've been involved in various learning and development programs that shaped my skills as a software engineer. I led a team during a Fullstack Web Development Bootcamp under the Kampus Merdeka program by Rakamin Academy, where we built a complete web application as our final project. After that, I joined two project-based virtual internships with Core Initiative and Qwords, where I contributed to building and improving real-world web products.
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <p className="text-[#1B3C53]/90 leading-relaxed text-base">
            One of my most meaningful experiences came from leading a government-funded project through the Student Creativity Program (PKM-KC) under the Ministry of Education. As the team leader, I guided the development of TeaGuard, a mobile-based application designed to detect pests and diseases in tea plants using machine learning. The project received official research funding and, later, our team represented it in a national digital poster competition held during the 37th National Student Science Week (PIMNAS) at Airlangga University where we proudly earned 2nd place.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-gradient-to-r from-[#1B3C53]/5 to-transparent rounded-xl p-6 border border-[#1B3C53]/10">
          <p className="text-[#1B3C53]/90 leading-relaxed text-base">
            More recently, I've also worked on several paid freelance projects, working directly with peers and clients to build fully functional web applications.
            And Now I'm currently seeking an <span className="font-bold text-[#1B3C53] bg-[#F9B572]/20 px-2 py-1 rounded">internship opportunity</span> where I can contribute, grow, and keep building things that truly make an impact.
          </p>
        </motion.div>
      </motion.div>

      {/* Education & Achievements Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid md:grid-cols-2 gap-6 lg:gap-8"
      >
        {/* Education Card */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(27, 60, 83, 0.15)" }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-white rounded-xl p-6 lg:p-8 shadow-md border border-[#1B3C53]/10 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#1B3C53]/5 to-transparent rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-br from-[#1B3C53] to-[#2d5573] rounded-lg shadow-md">
                <FaUserGraduate className="text-white text-xl" />
              </div>
              <h4 className="font-bold text-xl text-[#1B3C53]">Education</h4>
            </div>
            
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-[#1B3C53] text-base lg:text-lg">
                  Universitas Pembangunan Nasional "Veteran" Jakarta
                </p>
                <p className="text-sm text-[#1B3C53]/80 font-medium mt-1">
                  Bachelor of Informatics
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="inline-block px-3 py-1 bg-[#F9B572]/20 text-[#1B3C53] rounded-full text-sm font-semibold">
                    GPA 3.92
                  </span>
                  <span className="text-xs text-[#1B3C53]/60">Aug 2021 – Sept 2025</span>
                </div>
              </div>
              
              <div className="pt-4 border-t border-[#1B3C53]/10">
                <ul className="space-y-2 text-sm text-[#1B3C53]/80">
                  <li className="flex items-start gap-2">
                    <span className="text-[#F9B572] mt-1">▸</span>
                    <span>Developing a solid foundation in computer science and software engineering principles.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#F9B572] mt-1">▸</span>
                    <span>Specialized in building efficient and user-friendly web applications.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Achievements Card */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(249, 181, 114, 0.2)" }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-gradient-to-br from-[#F9F3EF] to-white rounded-xl p-6 lg:p-8 shadow-md border border-[#F9B572]/20 relative overflow-hidden group"
        >
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#F9B572]/10 to-transparent rounded-full -ml-16 -mb-16 group-hover:scale-150 transition-transform duration-500"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-br from-[#F9B572] to-[#f5a755] rounded-lg shadow-md">
                <FaMedal className="text-white text-xl" />
              </div>
              <h4 className="font-bold text-xl text-[#1B3C53]">Achievements</h4>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white/70 rounded-lg p-4 border border-[#F9B572]/20 hover:border-[#F9B572]/40 transition-colors">
                <div className="flex items-start gap-2 mb-2">
                  <FaAward className="text-[#F9B572] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[#1B3C53] text-sm lg:text-base">
                      Research Grant Awardee (PKM-KC, 2023–2024)
                    </p>
                    <p className="text-sm text-[#1B3C53]/80 mt-1 leading-relaxed">
                      Led <span className="italic font-medium">TeaGuard</span>, a mobile app for detecting pests and diseases in tea plants
                      using machine learning. Responsible for research, app design, and prototype development.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/70 rounded-lg p-4 border border-[#F9B572]/20 hover:border-[#F9B572]/40 transition-colors">
                <div className="flex items-start gap-2 mb-2">
                  <FaMedal className="text-[#F9B572] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[#1B3C53] text-sm lg:text-base">
                      2nd Place Winner (PIMNAS 37, 2024)
                    </p>
                    <p className="text-sm text-[#1B3C53]/80 mt-1 leading-relaxed">
                      Presented <span className="italic font-medium">TeaGuard</span> research findings in a national digital poster competition
                      held by Universitas Airlangga, earning national recognition.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}