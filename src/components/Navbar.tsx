"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import useIsWide from "@/hooks/useIsWide";

const NAV_LINKS = [
  { name: "What I do", href: "#what-i-do" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
];

export default function Navbar({ onMenuClick }: { onMenuClick?: () => void }) {
  const [activeSection, setActiveSection] = useState("");

  const isWide = useIsWide();

  return (
    <div className={`${isWide ? "lg:sticky top-6" : "fixed top-1"} z-50 flex justify-center w-full font-manrope px-4 left-0`}>
      <div className="w-full max-w-lg flex items-center gap-3">
        {/* Mobile Toggle Button inside Navbar */}
        {!isWide && (
          <button
            onClick={onMenuClick}
            className="h-10 w-10 bg-bg border border-white/10 rounded-2xl text-white shadow-2xl flex-none flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <i className="fa-solid fa-id-card text-lg" />
          </button>
        )}

        {/* TODO: add bg maybe ? */}
        <nav className="flex-1 backdrop-blur-md border border-white/10 rounded-2xl p-1 shadow-2xl">
          <ul className="flex items-center justify-between gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <li key={link.href} className="flex-1 text-center">
                  <Link
                    href={link.href}
                    onClick={() => setActiveSection(link.href)}
                    className={`
                    relative block py-1.5 px-3 text-sm font-bold tracking-tight rounded-xl transition-all duration-200
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
