import React, { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

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

  return (
    <section className="bg-[#F9F3EF] rounded-2xl shadow-md p-8 border border-[#d2c1b6]/30">
      <h3 className="text-2xl font-semibold text-[#1B3C53] mb-2">Contact</h3>
      <p className="text-[#1B3C53]/80 mb-8">
        Feel free to reach out for collaborations, opportunities, or just to say hi.
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div>
          <ul className="space-y-4 text-[#1B3C53]/90">
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-[#1B3C53] w-5 h-5" />
              <a
                href="mailto:wisnuandika104@gmail.com"
                className="hover:underline hover:text-[#153040] transition-colors"
              >
                wisnuandika104@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaLinkedin className="text-[#1B3C53] w-5 h-5" />
              <a
                href="https://www.linkedin.com/in/wisnuandika"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-[#153040] transition-colors"
              >
                linkedin.com/in/wisnuandika
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaGithub className="text-[#1B3C53] w-5 h-5" />
              <a
                href="https://github.com/pendragonnn"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-[#153040] transition-colors"
              >
                github.com/pendragonnn
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border border-[#d2c1b6]/50 focus:border-[#1B3C53] focus:ring-1 focus:ring-[#1B3C53] outline-none p-3 rounded-lg text-sm transition-all bg-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border border-[#d2c1b6]/50 focus:border-[#1B3C53] focus:ring-1 focus:ring-[#1B3C53] outline-none p-3 rounded-lg text-sm transition-all bg-white"
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            required
            className="border border-[#d2c1b6]/50 focus:border-[#1B3C53] focus:ring-1 focus:ring-[#1B3C53] outline-none p-3 rounded-lg text-sm transition-all bg-white"
          ></textarea>
          <button
            type="submit"
            className="bg-[#1B3C53] text-white py-2.5 rounded-lg text-sm font-medium hover:bg-[#153040] transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
