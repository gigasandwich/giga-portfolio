import sidebarData from "@/data/sidebar";
import Image from "next/image";

export default function Sidebar() {
  const d = sidebarData;

  return (
    <aside className="w-72 h-screen bg-black text-green-400 p-6 flex flex-col justify-between relative">
      {/*
        Sidebar container:
        - `flex flex-col justify-between`: place header content at top and socials at bottom
      */}
      <div className="flex flex-col items-start gap-3">
        {/* Avatar wrapper */}
        <div className="w-24 h-24 mb-4 relative self-center">
          {/* Image mask */}
          <div className="w-full h-full rounded-full overflow-hidden">
            <Image
              src={d.avatar}
              alt={d.fullName}
              width={96}
              height={96}
              loading="eager"
            />
          </div>

          {/* Status badge positioned over the avatar (absolute) with z-index to overlay */}
          <div className="absolute -top-3 -right-6 bg-green-900 text-green-100 text-xs px-2 py-1 rounded-xl shadow-md z-50" style={{ zIndex: 9999 }}>
            {d.status}
          </div>
        </div>

        <div className="w-full text-center">
          {/* Name and role: name wraps if long; role is emphasized with a subtle badge */}
          <h2 className="text-2xl font-extrabold tracking-tight break-words leading-tight max-w-full mb-2">{d.fullName}</h2>
          <p className="text-sm text-green-100 mt-2 font-semibold bg-green-800/20 px-3 py-1 rounded-md inline-block">{d.role}</p>

          {/* Location and Phones */}
          <div className="mt-8 text-left w-full flex flex-col gap-4">
            {/* Location row */}
            <div className="flex items-center text-xs text-green-300 gap-2">
              <div className="w-4 flex-none text-center">
                <i className="fa-solid fa-location-dot text-xs" aria-hidden />
              </div>
              <div className="flex-1 text-left">{d.location}</div>
            </div>

            {/* Phones row */}
            {d.contacts.phones?.map((p, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-green-300">
                <div className="w-4 flex-none text-center">
                  <i className="fa-solid fa-phone text-xs" aria-hidden />
                </div>
                <div className="flex-1 text-left">{p}</div>
              </div>
            ))}
          </div>

          {/* About text */}
          <p className="mt-8 text-xs text-green-200 text-left leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eveniet iste repudiandae iusto ad repellendus sint, ipsa atque facilis quae facere natus possimus iure consectetur quaerat non voluptate, architecto vitae!
          </p>
        </div>
      </div>

      <div className="mb-6">
        {/* Social icons row */}
        <div className="flex items-center justify-center gap-5">
          {d.contacts.socials?.map((s) => (
            <a key={s.name} href={s.url} aria-label={s.name} className="text-green-300 hover:text-white">
              <i className={`${s.icon} fa-lg`} />
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}
