"use client";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";

export const Header = () => {
  const [activeSection, setActiveSection] = useState("home");

  const sections = [
    { to: "home", label: "Home", duration: 500 },
    { to: "about", label: "About", duration: 500 },
    { to: "projects", label: "Projects", duration: 500 },
    { to: "contact", label: "Contact", duration: 500 },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section.to);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            if (activeSection !== section.to) {
              setActiveSection(section.to);
            }
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  return (
    <div className="flex justify-center items-center top-3 fixed w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <ul className="flex gap-4">
          {sections.map(({ to, label, duration }) => (
            <Link
              key={to}
              to={to}
              smooth={true}
              duration={duration}
              spy={true}
              offset={-50}
              className={`cursor-pointer px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 
                ${
                  activeSection === to
                    ? "bg-white shadow-md text-gray-900 scale-105"
                    : "text-white hover:bg-white/20"
                }`}
              onSetActive={() => setActiveSection(to)}
            >
              {label}
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
};
