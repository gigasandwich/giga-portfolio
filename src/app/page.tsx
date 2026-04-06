"use client";

import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import WhatIDo from "@/sections/WhatIDo";
import { useState } from "react";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-neutral-bg">
      {/* 
        Sidebar: 
        - Mobile: Toggleable overlay 
        - Desktop: `lg:flex-row` parent makes it stay on the left (72 width)
      */}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* 
        Main Content Wrapper:
        - `flex-1`: takes up remaining horizontal space on desktop
        - `h-screen overflow-y-auto`: fixed height scrolling area for desktop
        - `scroll-smooth`: for section jumping
      */}
      <div className="flex-1 relative h-screen overflow-y-auto scroll-smooth">
        <Navbar onMenuClick={() => setIsSidebarOpen(true)} />
        
        <main className="p-4 lg:p-8 pt-20 lg:pt-0 mt-4">
          {/* Section: What I do */}
          <WhatIDo />

          {/* Section: Experience */}
          <section id="experience" className="min-h-screen flex items-center justify-center border-b border-white/5">
            <h2 className="text-3xl lg:text-4xl font-manrope font-extrabold text-white">Experience</h2>
          </section>

          {/* Section: Projects */}
          <section id="projects" className="min-h-screen flex items-center justify-center">
            <h2 className="text-3xl lg:text-4xl font-manrope font-extrabold text-white">Projects</h2>
          </section>
        </main>
      </div>
    </div>
  );
}
