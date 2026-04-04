import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 relative h-screen overflow-y-auto">
        <Navbar />
        <main className="p-8">
          <div className="mt-8">
            {Array.from({ length: 100 }, (_, i) => (
              <p key={i} className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.
              </p>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
