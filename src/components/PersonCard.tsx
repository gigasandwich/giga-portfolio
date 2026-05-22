import React from "react";

export type Person = {
  name: string;
  role?: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
  facebook?: string;
  website?: string;
  image?: string;
};

export default function PersonCard({ person }: { person: Person }) {
  const initials = person.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="flex items-center gap-4 bg-white/3 px-4 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 w-full max-w-[300px] border border-white/5">
      <div className="w-12 h-12 flex-shrink-0 rounded-full overflow-hidden bg-gradient-to-tr from-primary to-purple-600 flex items-center justify-center text-black font-bold text-sm">
        {person.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
        ) : (
          <span className="text-sm">{initials}</span>
        )}
      </div>

      <div className="flex flex-col truncate min-w-0">
        <span className="text-sm font-bold text-white truncate">{person.name}</span>
        {person.role && <span className="text-[10px] uppercase tracking-wider text-white/50">{person.role}</span>}

        <div className="flex gap-3 items-center mt-1.5">
          {person.linkedin && (
            <a href={person.linkedin} target="_blank" rel="noreferrer" className="text-xs text-white/80 flex items-center gap-2 p-1 rounded-md hover:bg-white/5 transition-colors">
              <i className="fab fa-linkedin text-base" aria-hidden></i>
              <span className="sr-only">LinkedIn</span>
            </a>
          )}
          {person.github && (
            <a href={person.github} target="_blank" rel="noreferrer" className="text-xs text-white/80 flex items-center gap-2 p-1 rounded-md hover:bg-white/5 transition-colors">
              <i className="fab fa-github text-base" aria-hidden></i>
              <span className="sr-only">GitHub</span>
            </a>
          )}
          {person.twitter && (
            <a href={`https://twitter.com/${person.twitter}`} target="_blank" rel="noreferrer" className="text-xs text-white/80 flex items-center gap-2 p-1 rounded-md hover:bg-white/5 transition-colors">
              <i className="fab fa-twitter text-base" aria-hidden></i>
              <span className="sr-only">Twitter</span>
            </a>
          )}
          {person.facebook && (
            <a href={person.facebook} target="_blank" rel="noreferrer" className="text-xs text-white/80 flex items-center gap-2 p-1 rounded-md hover:bg-white/5 transition-colors">
              <i className="fab fa-facebook text-base" aria-hidden></i>
              <span className="sr-only">Facebook</span>
            </a>
          )}
          {person.website && (
            <a href={person.website} target="_blank" rel="noreferrer" className="text-xs text-white/80 flex items-center gap-2 p-1 rounded-md hover:bg-white/5 transition-colors">
              <i className="fas fa-globe text-base" aria-hidden></i>
              <span className="sr-only">Website</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
