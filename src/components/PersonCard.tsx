import React from "react";

export type Person = {
  name: string;
  role?: string;
  linkedin?: string;
  github?: string;
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
    <div className="flex items-center gap-3 bg-white/3 px-3 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
      <div className="w-11 h-11 rounded-full overflow-hidden bg-gradient-to-tr from-primary to-purple-600 flex items-center justify-center text-black font-bold text-sm">
        {person.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
        ) : (
          <span className="text-sm">{initials}</span>
        )}
      </div>

      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-white truncate">{person.name}</span>
        {person.role && <span className="text-xs text-white/60">{person.role}</span>}

        <div className="flex gap-3 items-center mt-2">
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
        </div>
      </div>
    </div>
  );
}
