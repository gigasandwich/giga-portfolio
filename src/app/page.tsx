"use client"; // TODO: you know it
 
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import WhatIDo from "@/sections/WhatIDo";
import { useState, useEffect } from "react";
import Experience from "@/sections/Experience";
import Projects from "@/sections/Projects";
import ParallaxedSection from "@/components/ParallaxedSection";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const commonParallaxImage = "/assets/svgs/bg-experience.svg";
  
  // Force open on large screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsSidebarOpen(true);
    };

    // On lg: starts open
    // On sm: do not auto-close
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
          <ParallaxedSection 
            image={commonParallaxImage} 
            title={"What I Do"} 
            id="what-i-do" className="min-h-screen border-b border-white/5"
            content={
              <WhatIDo />
            }
          />
              
          {/* Section: Experience */}
          <ParallaxedSection 
            image={commonParallaxImage} 
            id="experience"
            className="border-b border-white/5"
            title={
              <>
                Experience &
                <p className="text-primary">involvement</p>
              </>
            }
            content={<Experience />}
          />

          {/* Section: Projects */}
          <ParallaxedSection 
          image={commonParallaxImage} 
            title={"Projects"} 
            id="projects"
            className="min-h-screen border-b border-white/5"
            content={<Projects />} 
          />
        </main>
      </div>
    </div>
  );
}
