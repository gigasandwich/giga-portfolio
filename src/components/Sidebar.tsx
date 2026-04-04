"use client";

import sidebarData from "@/data/sidebar";
import Image from "next/image";
import { useState } from "react";

export default function Sidebar() {
  const d = sidebarData;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* 
        Mobile Toggle: 
        - `fixed top-6 left-6`: always accessible on mobile
        - `z-[60]`: higher than navbar and sidebar to stay clickable
        - `lg:hidden`: visible only on mobile/tablet
      */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 left-6 z-[60] text-primary lg:hidden p-2 bg-neutral-bg/50 backdrop-blur-sm rounded-lg"
        aria-label="Toggle menu"
      >
        <i className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"} text-2xl`} />
      </button>

      {/* 
        Sidebar container: 
        - `fixed lg:static`: overlay on mobile, fixed element in layout on desktop
        - `translate-x`: hides/shows sidebar on mobile based on state
        - `w-full lg:w-72`: takes full width when toggled on mobile
      */}
      <aside className={`
        fixed inset-y-0 left-0 z-[55] w-full bg-neutral-bg p-6 flex flex-col justify-between 
        transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:w-72 lg:h-screen lg:border-r lg:border-white/5 lg:shadow-2xl
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}>
        <div className="flex flex-col items-start gap-3 mt-12 lg:mt-0">
          {/* Avatar wrapper */}
          <div className="w-24 h-24 mb-4 relative self-center">
            {/* Image mask */}
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-primary/20 shadow-inner">
              <Image
                src={d.avatar}
                alt={d.fullName}
                width={96}
                height={96}
                loading="eager"
              />
            </div>

            {/* Status badge */}
            <div className="absolute -top-3 -right-6 bg-primary text-neutral-bg font-bold text-[10px] uppercase tracking-wider px-2 py-1 rounded-xl shadow-lg z-50">
              {d.status}
            </div>
          </div>

          <div className="w-full text-center">
            <h2 className="text-2xl font-manrope font-extrabold tracking-tight break-words leading-tight max-w-full mb-1 text-white">{d.fullName}</h2>
            <p className="text-xs text-primary font-bold uppercase tracking-widest mt-1 bg-primary/10 px-3 py-1.5 rounded-md inline-block border border-primary/20">{d.role}</p>

            <div className="mt-8 text-left w-full flex flex-col gap-4">
              <div className="flex items-center text-sm group">
                <div className="w-4 flex-none text-center mr-2">
                  <i className="fa-solid fa-location-dot text-primary/70 group-hover:text-primary transition-colors" aria-hidden />
                </div>
                <div className="flex-1 text-white/90 leading-snug font-inter">{d.location}</div>
              </div>

              {d.contacts.phones?.map((p, i) => (
                <div key={i} className="flex items-center text-sm group">
                  <div className="w-4 flex-none text-center mr-2">
                    <i className="fa-solid fa-phone text-primary/70 group-hover:text-primary transition-colors" aria-hidden />
                  </div>
                  <div className="flex-1 text-white/90 font-inter">{p}</div>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm text-white/70 text-left leading-relaxed font-normal italic border-l-2 border-primary/30 pl-4 py-1 font-inter">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eveniet iste repudiandae iusto ad repellendus sint, ipsa atque facilis quae facere natus possimus iure consectetur quaerat non voluptate, architecto vitae!
            </p>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-center gap-6">
            {d.contacts.socials?.map((s) => (
              <a key={s.name} href={s.url} aria-label={s.name} className="text-white/60 hover:text-primary transition-all duration-300 transform hover:scale-110">
                <i className={`${s.icon} fa-xl`} />
              </a>
            ))}
          </div>
        </div>
      </aside>

      {/* Backdrop for mobile to close the menu when clicking outside */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[50] lg:hidden" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
