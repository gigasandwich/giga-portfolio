import sidebarData from "@/data/sidebar";
import Image from "next/image";

export default function Sidebar() {
  const d = sidebarData;

  return (
    <aside className="w-72 h-screen bg-neutral-bg text-white p-6 flex flex-col justify-between relative font-inter border-r border-white/5 shadow-2xl">
      {/*
        Sidebar container:
        - `bg-neutral-bg text-white`: dark background with white text for maximum readability
        - `border-r border-white/5`: subtle separation from main content
      */}
      <div className="flex flex-col items-start gap-3">
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
          {/* Name and role: high contrast for key information */}
          <h2 className="text-2xl font-manrope font-extrabold tracking-tight break-words leading-tight max-w-full mb-1 text-white">{d.fullName}</h2>
          <p className="text-xs text-primary font-bold uppercase tracking-widest mt-1 bg-primary/10 px-3 py-1.5 rounded-md inline-block border border-primary/20">{d.role}</p>

          {/* Location and Phones: light gray/greenish for icons, muted white for text */}
          <div className="mt-8 text-left w-full flex flex-col gap-4">
            {/* Location row */}
            <div className="flex items-center text-sm group">
              <div className="w-4 flex-none text-center mr-2">
                <i className="fa-solid fa-location-dot text-primary/70 group-hover:text-primary transition-colors" aria-hidden />
              </div>
              <div className="flex-1 text-white/90 leading-snug">{d.location}</div>
            </div>

            {/* Phones row */}
            {d.contacts.phones?.map((p, i) => (
              <div key={i} className="flex items-center text-sm group">
                <div className="w-4 flex-none text-center mr-2">
                  <i className="fa-solid fa-phone text-primary/70 group-hover:text-primary transition-colors" aria-hidden />
                </div>
                <div className="flex-1 text-white/90">{p}</div>
              </div>
            ))}
          </div>

          {/* About text: legible size and character spacing */}
          <p className="mt-8 text-sm text-white/70 text-left leading-relaxed font-normal italic border-l-2 border-primary/30 pl-4 py-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eveniet iste repudiandae iusto ad repellendus sint, ipsa atque facilis quae facere natus possimus iure consectetur quaerat non voluptate, architecto vitae!
          </p>
        </div>
      </div>

      <div className="mb-6">
        {/* Social icons row: high contrast with active hover states */}
        <div className="flex items-center justify-center gap-6">
          {d.contacts.socials?.map((s) => (
            <a key={s.name} href={s.url} aria-label={s.name} className="text-white/60 hover:text-primary transition-all duration-300 transform hover:scale-110">
              <i className={`${s.icon} fa-xl`} />
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}
