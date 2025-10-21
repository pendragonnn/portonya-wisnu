import React, { useState } from "react";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaCode,
  FaPaperPlane,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const to = "wisnuandika104@gmail.com";
    const subject = `Message from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;

    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);

    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${encodedSubject}&body=${encodedBody}`;
    const newWindow = window.open(gmailLink, "_blank");

    if (!newWindow) {
      const mailtoLink = `mailto:${to}?subject=${encodedSubject}&body=${encodedBody}`;
      window.location.href = mailtoLink;
    }

    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "wisnuandika104@gmail.com",
      href: "mailto:wisnuandika104@gmail.com",
      color: "from-[#F9B572] to-[#f5a755]",
    },
    {
      icon: FaLinkedin,
      label: "linkedin.com/in/wisnuandika",
      href: "https://www.linkedin.com/in/wisnuandika",
      color: "from-[#0077b5] to-[#005885]",
    },
    {
      icon: FaGithub,
      label: "github.com/pendragonnn",
      href: "https://github.com/pendragonnn",
      color: "from-[#1B3C53] to-[#2d5573]",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-white via-[#F9F3EF]/20 to-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-10 max-w-6xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 text-center md:text-left"
      >
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1B3C53] mb-2 flex justify-start items-start gap-3">
          <div className="w-2 h-8 bg-gradient-to-b from-[#F9B572] to-[#f5a755] rounded-full"></div>
          Get In Touch
        </h3>
        <p className="text-[#1B3C53]/70 text-start text-sm sm:text-base ml-5">
          Feel free to reach out for collaborations, opportunities, or just to
          say hi.
        </p>
        <div className="mt-4 h-px bg-gradient-to-r from-transparent via-[#1B3C53]/20 to-transparent"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          <div className="bg-gradient-to-br from-[#F9F3EF] to-white rounded-xl p-5 sm:p-6 border border-[#F9B572]/20 shadow-md">
            <h4 className="font-bold text-lg text-[#1B3C53] mb-4 flex items-center gap-2">
              <FaCode className="text-[#F9B572]" />
              Contact Information
            </h4>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-3 sm:p-4 bg-white rounded-lg border border-[#1B3C53]/10 hover:border-[#F9B572]/40 hover:shadow-md transition-all group"
                >
                  <div
                    className={`p-3 bg-gradient-to-br ${item.color} rounded-lg shadow-sm shrink-0`}
                  >
                    <item.icon className="text-white text-lg" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-[#1B3C53] font-medium group-hover:text-[#2d5573] transition-colors truncate">
                      {item.label}
                    </p>
                  </div>
                  <FaPaperPlane className="text-[#F9B572] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                </motion.a>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-r from-[#1B3C53] to-[#2d5573] rounded-xl p-6 text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>
            <div className="relative z-10">
              <h5 className="font-bold text-lg mb-2">Let's Work Together!</h5>
              <p className="text-white/80 text-sm leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col gap-4 bg-white rounded-xl p-5 sm:p-6 shadow-md border border-[#F9B572]/10"
        >
          <div className="flex flex-col sm:flex-row sm:gap-4">
            <div className="flex-1">
              <label className="block text-sm font-semibold text-[#1B3C53] mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-[#1B3C53]/20 focus:border-[#F9B572] focus:ring-2 focus:ring-[#F9B572]/20 outline-none p-3 rounded-xl text-sm transition-all bg-white shadow-sm hover:shadow-md"
              />
            </div>

            <div className="flex-1 mt-4 sm:mt-0">
              <label className="block text-sm font-semibold text-[#1B3C53] mb-2">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-[#1B3C53]/20 focus:border-[#F9B572] focus:ring-2 focus:ring-[#F9B572]/20 outline-none p-3 rounded-xl text-sm transition-all bg-white shadow-sm hover:shadow-md"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#1B3C53] mb-2">
              Your Message
            </label>
            <textarea
              name="message"
              rows="5"
              placeholder="Tell me about your project or say hi..."
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border border-[#1B3C53]/20 focus:border-[#F9B572] focus:ring-2 focus:ring-[#F9B572]/20 outline-none p-3 rounded-xl text-sm transition-all bg-white shadow-sm hover:shadow-md resize-none"
            ></textarea>
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-[#1B3C53] to-[#2d5573] text-white py-3 sm:py-4 rounded-xl text-sm font-bold hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
          >
            <span>Send Message</span>
            <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
