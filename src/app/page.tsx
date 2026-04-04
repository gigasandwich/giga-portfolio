import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 relative h-screen overflow-y-auto scroll-smooth">
        <Navbar />
        <main className="p-8">
          {/* Section: What I do */}
          <section id="what-i-do" className="h-screen flex items-center justify-center border-b border-white/5">
            <h2 className="text-4xl font-manrope font-extrabold text-white">What I do</h2>
          </section>

          {/* Section: Experience */}
          <section id="experience" className="h-screen flex items-center justify-center border-b border-white/5">
            <h2 className="text-4xl font-manrope font-extrabold text-white">Experience</h2>
          </section>

          {/* Section: Projects */}
          <section id="projects" className="h-screen flex items-center justify-center">
            <h2 className="text-4xl font-manrope font-extrabold text-white">Projects</h2>
          </section>
        </main>
      </div>
    </div>
  );
}
