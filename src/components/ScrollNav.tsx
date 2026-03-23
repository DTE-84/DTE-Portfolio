"use client";

import React, { useEffect, useState } from "react";

const ScrollNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "footer"];
      const scrollPosition = window.scrollY + 150;

      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100;

      if (isAtBottom) {
        setActiveSection("footer");
      } else {
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element && scrollPosition >= element.offsetTop) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const sections = [
    { id: "home", label: "HOME", top: "0%" },
    { id: "about", label: "IDENTITY", top: "33%" },
    { id: "projects", label: "ARCHIVES", top: "66%" },
    { id: "footer", label: "TRANSMISSIONS", top: "100%" },
  ];

  return (
    <div className="scroll-nav-container fixed top-1/2 left-[25px] -translate-y-1/2 w-3 h-[400px] z-[1000] hidden xl:block">
      <div className="scroll-track absolute inset-y-0 left-[5px] w-[2px] bg-accent/30 shadow-[0_0_15px_var(--theme-accent),0_0_5px_rgba(var(--theme-accent-rgb),0.5)] rounded-[2px]" />
      {sections.map((section) => (
        <div
          key={section.id}
          className={`orb-wrapper absolute left-0 flex items-center cursor-pointer -translate-y-1/2 transition-all duration-400 group ${activeSection === section.id ? "active" : ""}`}
          style={{ top: section.top }}
          onClick={() => scrollToSection(section.id)}
        >
          <div
            className={`orb w-3 h-3 rounded-full border border-accent transition-all duration-400 z-[2] shadow-[0_0_10px_rgba(var(--theme-accent-rgb),0.2)] ${activeSection === section.id ? "bg-accent scale-[1.3] shadow-[0_0_20px_var(--theme-accent)] animate-[orbPulse_1.5s_infinite]" : "bg-[#0f172a]"}`}
          />
          <span
            className={`orb-label ml-[55px] text-[14px] font-bold text-accent tracking-[2px] whitespace-nowrap transition-all duration-400 group-hover:opacity-100 group-hover:translate-x-0 ${activeSection === section.id ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-[15px]"}`}
          >
            {section.label}
          </span>
          {}
          <div
            className={`absolute left-[15px] h-[1px] bg-gradient-to-r from-accent to-transparent opacity-40 transition-all duration-400 pointer-events-none group-hover:w-10 ${activeSection === section.id ? "w-10" : "w-0"}`}
          />
        </div>
      ))}
    </div>
  );
};

export default ScrollNav;

