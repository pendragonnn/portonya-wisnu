import React from "react";

export default function Contact() {
  return (
    <section className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-2xl font-semibold mb-3">Contact</h3>
      <p className="text-[#1B3C53]/80 mb-4">Feel free to reach me via email or connect on LinkedIn / GitHub.</p>

      <ul className="mb-6 space-y-2">
        <li>Email: <a href="mailto:your@email.com" className="text-blue-600">
          your@email.com
        </a></li>
        <li>LinkedIn: <a href="#" className="text-blue-600">linkedin.com/in/yourname</a></li>
        <li>GitHub: <a href="#" className="text-blue-600">github.com/yourname</a></li>
      </ul>

      <form className="flex flex-col gap-3 max-w-md">
        <input type="text" placeholder="Your name" className="border p-2 rounded-md"/>
        <input type="email" placeholder="Your email" className="border p-2 rounded-md"/>
        <textarea rows="4" placeholder="Your message" className="border p-2 rounded-md"></textarea>
        <button className="bg-[#1B3C53] text-white py-2 rounded-md hover:bg-[#153040]">Send Message</button>
      </form>
    </section>
  );
}
