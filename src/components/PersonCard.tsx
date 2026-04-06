import React from "react";

export type Person = {
  name: string;
  role?: string;
  linkedin?: string;
  github?: string;
};

export default function PersonCard({ person }: { person: Person }) {
  const initials = person.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="flex items-center gap-3 bg-white/3 px-3 py-2 rounded-lg">
      <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white font-bold">
        {initials}
      </div>

      <div className="flex flex-col">
        <span className="text-sm font-medium text-white">{person.name}</span>
        <div className="flex gap-3 items-center mt-1">
          {person.linkedin && (
            <a href={person.linkedin} target="_blank" rel="noreferrer" className="text-xs text-white/80 flex items-center gap-2">
              <i className="fab fa-linkedin text-sm" aria-hidden></i>
              <span className="sr-only">LinkedIn</span>
            </a>
          )}
          {person.github && (
            <a href={person.github} target="_blank" rel="noreferrer" className="text-xs text-white/80 flex items-center gap-2">
              <i className="fab fa-github text-sm" aria-hidden></i>
              <span className="sr-only">GitHub</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
