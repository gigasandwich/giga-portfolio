"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { name: "What I do", href: "#what-i-do" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
];

export default function Navbar() {
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
    /* 
      Navbar Wrapper:
      - `fixed lg:sticky`: On mobile, `fixed` ensures it stays at the top.
      - `pl-16 lg:pl-0`: Adds left padding on mobile to avoid overlapping with the sidebar sandwich button.
    */
    <div className="fixed lg:sticky top-6 z-50 flex justify-center w-full font-manrope px-4 pl-20 lg:pl-4 left-0">
      <nav className="w-full max-w-lg bg-neutral-bg/80 backdrop-blur-md border border-white/10 rounded-2xl p-1.5 shadow-2xl">
        {/* 
          Navbar Container:
          - `bg-neutral-bg/80 backdrop-blur-md`: Glassmorphism effect
          - `rounded-2xl`: Smoother corners
          - `p-1.5`: Tight padding for a modern "capsule" look
        */}
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
  );
}