"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { name: "What I do", href: "#what-i-do" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
];

export default function Navbar({ onMenuClick }: { onMenuClick?: () => void }) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const mainContent = document.querySelector(".overflow-y-auto");
    if (!mainContent) return;

    const handleScroll = () => {
      const sections = NAV_LINKS.map(link => link.href.replace("#", ""));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjustmetn for the sticky navbar height + buffer
          return rect.top >= -50 && rect.top <= 150;
        }
        return false;
      });
      if (currentSection) setActiveSection(`#${currentSection}`);
    };

    mainContent.addEventListener("scroll", handleScroll);
    return () => mainContent.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed lg:sticky top-3 lg:top-6 z-50 flex justify-center w-full font-manrope px-4 lg:px-4 left-0">
      <div className="w-full max-w-lg flex items-center gap-3">
        {/* Mobile Toggle Button inside Navbar */}
        <button
          onClick={onMenuClick}
          className="lg:hidden p-3 bg-neutral-bg/80 backdrop-blur-md border border-white/10 rounded-2xl text-primary shadow-2xl flex-none"
          aria-label="Toggle menu"
        >
          <i className="fa-solid fa-bars text-xl" />
        </button>

        <nav className="flex-1 bg-neutral-bg/80 backdrop-blur-md border border-white/10 rounded-2xl p-1.5 shadow-2xl">
          <ul className="flex items-center justify-between gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <li key={link.href} className="flex-1 text-center">
                  <Link
                    href={link.href}
                    className={`
                    relative block py-2.5 px-4 text-sm font-bold tracking-tight rounded-xl transition-all duration-300
                    ${isActive
                        ? "text-primary bg-primary/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]"
                        : "text-white/60 hover:text-white hover:bg-white/5"}
                  `}
                  >
                    {link.name}
                    {/* Subtle active indicator dot */}
                    {isActive && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}
