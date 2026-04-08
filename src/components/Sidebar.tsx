"use client";

import sidebarData from "@/data/sidebar";
import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useIsWide from "@/hooks/useIsWide";

export default function Sidebar({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (o: boolean) => void }) {
  const d = sidebarData;

  const isWide = useIsWide();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.aside key="sidebar"
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={{ left: 0, right: 0.5 }}
          onDragEnd={(_, info) => {
            if (info.offset.x < -100) {
              setIsOpen(false);
            }
          }}
          className={
            isWide
              ? `static z-[55] w-72 p-6 flex flex-col justify-between h-screen border-r border-white/5 shadow-2xl max-h-screen overflow-y-auto`
              : `fixed inset-y-0 left-0 z-[55] w-[85%] sm:w-72 p-6 flex flex-col justify-between max-h-screen overflow-y-auto`
          }
          style={{ background: "var(--background)" }}
        >
          {/* Mobile close button */}
          <button
            onClick={() => setIsOpen(false)}
            className={`${isWide ? "hidden" : "absolute top-2 left-4 z-[60] h-10 w-10 bg-neutral-bg/70 text-white/80 flex items-center justify-center"}`}
            aria-label="Close menu"
          >
            <i className="fa-solid fa-xmark text-lg" />
          </button>
          <div className="flex flex-col items-start gap-3 mt-12 lg:mt-0">
            {/* Avatar wrapper */}
            <div className="w-24 h-24 mb-4 relative self-center">
              {/* Image mask */}
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-primary/20 shadow-inner">
                <Image
                  src={d.avatar}
                  // TODO: SEO
                  alt={`${d.firstName}${d.lastName}`}
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
              <div className="text-2xl font-manrope font-extrabold tracking-tight break-words leading-tight max-w-full mb-1 text-white">
                <p >{d.lastName}</p>
                <p>{d.firstName}</p>
              </div>

              <h4 className="mt-1 bg-none px-3 py-1.5 rounded-md inline-block border border-primary text-white">{d.role}</h4>

              <div className="mt-8 text-left w-full flex flex-col gap-4">
                <InfoWithIcon icon={"fa-location-dot"}>
                    {d.location}
                </InfoWithIcon>
                <InfoWithIcon icon={"fa-envelope"}>
                    <a href={d.contacts.email} className="hover:underline">{d.contacts.email.replace('mailto:', '')}</a>
                </InfoWithIcon>
                <InfoWithIcon icon={"fa-location-dot"}>
                    {d.location}
                </InfoWithIcon>

                {d.contacts.phones?.map((p, i) => (
                  <InfoWithIcon key={i} icon={"fa-phone"}>
                    {p}
                  </InfoWithIcon>
                ))}
              </div>
            </div>

            
            <div className="mt-2">
                <h5 className="font-normal text-left leading-relaxed border-l-2 border-primary pl-4 py-1">
                  {d.about}
                </h5>
            </div>
          </div>

          <div className="mt-8 mb-8">
            <a href={d.cvLink} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-primary text-neutral-bg font-bold py-2 px-4 rounded-lg shadow-md hover:bg-primary/90 transition-all">
              My CV
            </a>

            <div className="flex items-center justify-center gap-6 mt-8">
              {d.contacts.socials?.map((s) => (
                <a key={`${s.name ?? ''}-${s.url}`} href={s.url} aria-label={s.name} className="text-white/60 hover:text-primary transition-all duration-300 transform hover:scale-110">
                  <i className={`${s.icon} fa-xl`} />
                </a>
              ))}
            </div>
          </div>
        </motion.aside>
      )}

      {/* Backdrop for mobile to close the menu when clicking outside */}
      {isOpen && !isWide && (
        <motion.div key="sidebar-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[50]"
          onClick={() => setIsOpen(false)}
        />
      )}
    </AnimatePresence>
  );
}

function InfoWithIcon({icon, children} : {icon: string, children: string | React.ReactNode}) {
  return (
    <div className="flex items-center text-sm group">
      <div className="w-4 flex-none text-center mr-2">
        <i className={`fa-solid ${icon} text-white/90 group-hover:text-primary transition-colors`} aria-hidden />
      </div>
      <div className="flex-1 text-white leading-snug font-inter">{children}</div>
    </div>
  );
}