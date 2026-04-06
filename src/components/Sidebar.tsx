"use client";

import sidebarData from "@/data/sidebar";
import Image from "next/image";
import { useState } from "react";

export default function Sidebar({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (o: boolean) => void }) {
  const d = sidebarData;

  return (
    <>
      {/* 
        Close Overlay for mobile
      */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[54] lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

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
        {/* Mobile close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="lg:hidden absolute top-4 left-4 z-[60] py-2 px-4 bg-neutral-bg/70 backdrop-blur-md rounded-md border border-white/10 text-white/80"
          aria-label="Close menu"
        >
          <i className="fa-solid fa-xmark" />
        </button>
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
              />
            </div>

            {/* Status badge */}
            <div className="absolute -top-3 -right-12 bg-primary text-neutral-bg font-bold text-[10px] uppercase tracking-wider px-2 py-1 rounded-xl shadow-lg z-50">
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

              <div className="flex items-center text-sm group">
                <div className="w-4 flex-none text-center mr-2">
                  <i className="fa-solid fa-envelope text-primary/70 group-hover:text-primary transition-colors" aria-hidden />
                </div>
                <div className="flex-1 text-white/90 leading-snug font-inter">
                  <a href={d.contacts.email} className="hover:underline">{d.contacts.email.replace('mailto:', '')}</a>
                </div>
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
              {d.about}
            </p>
          </div>
        </div>

        <div className="mb-8">
          <a href={d.cvLink} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-primary text-neutral-bg font-bold py-2 px-4 rounded-lg shadow-md hover:bg-primary/90 transition-all">
            My CV
          </a>

          <div className="flex items-center justify-center gap-6 mt-8">
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
