import React from "react";
import { ExperienceType } from "@/data/experience/Main";

export default function VerticalTimeline({
  items,
  selected,
  onSelect,
}: {
  items: ExperienceType[];
  selected: number;
  onSelect: (i: number) => void;
}) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-[15px] top-6 bottom-6 w-px bg-white/10 pointer-events-none" />

      {/* pr-12 for the scrollbar */}
      <div className="flex flex-col gap-10 lg:max-h-[720px] lg:overflow-y-auto lg:pr-12 thin-scrollbar">
        {items.map((item, i) => {
          const startLabel = item.start.toLocaleString(undefined, { month: "short", year: "numeric" });
          const endLabel = item.end ? item.end.toLocaleString(undefined, { month: "short", year: "numeric" }) : "PRESENT";
          // First item: non-clickable
          if (i === 0) {
            return (
              <div key={i} className="relative pl-12 text-left w-full opacity-100">
                <div className="absolute left-0 top-[6px] w-[31px] flex justify-center">
                  <div className="w-3.5 h-3.5 rounded-full ring-3 ring-primary/20" />
                </div>

                <div className="flex flex-col gap-1 max-w-[250px] lg:max-w-[300px]">
                  <h3 className={`leading-snug tracking-widest text-primary uppercase`}>
                    {item.title}
                  </h3>
                  <p className="font-bold leading-tight text-white">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          }

          return (
            <button
              key={i}
              onClick={() => onSelect(i)}
              className={
                `relative pl-12 text-left group w-full transition-all duration-200 ${i === selected ? 'opacity-100' : 'opacity-40 hover:opacity-100'}
                cursor-pointer
                `}
            >

              {/* Dot */}
              <div className="absolute left-0 top-[6px] w-[31px] flex justify-center">
                {i === selected ? (
                  <div className="w-3.5 h-3.5 rounded-full bg-primary" />
                ) : (
                  <div className="w-3 h-3 rounded-full border-2 border-white/20 group-hover:border-white/40 bg-neutral-bg" />
                )}
              </div>

              <div className="flex flex-col gap-2 max-w-[260px] lg:max-w-[320px]">
                <time className="font-semibold tracking-wide text-white/70 uppercase">
                  {startLabel} — {endLabel}
                </time>
                <h3 className={`font-bold leading-snug ${i === selected ? 'text-white' : 'text-white/80 group-hover:text-white'}`}>
                  {item.title}
                </h3>
                {item.meta && (
                  <p className="text-white/50 font-medium">
                    {item.meta}
                  </p>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
