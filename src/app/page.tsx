"use client"; // TODO: you know it

import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import WhatIDo from "@/sections/WhatIDo";
import { useState, useEffect } from "react";
import useIsWide from "@/hooks/useIsWide";
import { SIDEBAR_BREAKPOINT } from "@/config/ui";
import Experience from "@/sections/Experience";
import Projects from "@/sections/Projects";
import ParallaxedSection from "@/components/ParallaxedSection";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const commonParallaxImage = "/assets/svgs/bg-experience.svg";

  // Force open on wide screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= SIDEBAR_BREAKPOINT) setIsSidebarOpen(true);
    };

    // On wide: starts open
    // On small: do not auto-close
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`flex ${useIsWide() ? "flex-row" : "flex-col"} min-h-screen bg-neutral-bg`}>
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
          <ParallaxedSection
            id="what-i-do"
            className=""
            image={commonParallaxImage}
            title={"What I Do"}
            content={
              <WhatIDo />
            }
          />

          {/* Section: Experience */}
          {/* TODO: fix nav link going to experience  */}
          <ParallaxedSection
            id="experience"
            className="mt-8"
            image={commonParallaxImage}
            title={
              <>
                Experience & <span className="text-primary">involvement</span>
              </>
            }
            content={<Experience />}
          />

          {/* Section: Projects */}
          <ParallaxedSection
            id="projects"
            className="mt-8"
            image={commonParallaxImage}
            title={"Projects"}
            content={<Projects />}
          />
        </main>
      </div>
    </div>
  );
}
