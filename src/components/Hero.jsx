import React from "react";

const Hero = () => {
  return (
    <section className="pt-28 pb-16 max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
      <img
        src="https://via.placeholder.com/250"
        alt="Profile"
        className="rounded-full w-48 h-48 object-cover shadow-md"
      />
      <div>
        <h2 className="text-3xl font-bold mb-4">Hi, I'm [Your Name] 👋</h2>
        <p className="text-lg leading-relaxed text-[#1B3C53]/80">
          With a solid background in computer science, I have explored both web
          and mobile development through various courses, bootcamps, and
          internships. I’ve worked on fullstack projects, built mobile
          applications, and now I’m focusing on seeking opportunities to
          broaden my experience through internships or professional roles.
        </p>
      </div>
    </section>
  );
};

export default Hero;
