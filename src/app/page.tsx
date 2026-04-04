import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-8">
        Hello World :P
      </main>
    </div>
  );
}
