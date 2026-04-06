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
      <div className="hidden lg:block absolute left-[15px] top-6 bottom-6 w-px bg-white/10" />

        {/* pr-12 for the scrollbar */}
      <div className="flex flex-col gap-10 lg:max-h-[720px] lg:overflow-y-auto lg:pr-12 thin-scrollbar">
        {items.map((item, i) => {
          const startLabel = item.start.toLocaleString(undefined, { month: "short", year: "numeric" });
          const endLabel = item.end ? item.end.toLocaleString(undefined, { month: "short", year: "numeric" }) : "PRESENT";
          return (
            <button
              key={i}
              onClick={() => onSelect(i)}
              className={`relative pl-12 text-left group w-full transition-all duration-200 ${i === selected ? 'opacity-100' : 'opacity-40 hover:opacity-100'}`}>

              {/* Dot */}
              <div className="absolute left-0 top-[6px] w-[31px] flex justify-center">
                {i === selected ? (
                  <div className="w-3.5 h-3.5 rounded-full bg-primary ring-4 ring-primary/20" />
                ) : (
                  <div className="w-3 h-3 rounded-full border-2 border-white/20 group-hover:border-white/40 bg-neutral-bg" />
                )}
              </div>

              <div className="flex flex-col gap-1">
                <p className="text-[11px] font-bold tracking-widest text-white/60 uppercase">
                  {startLabel} — {endLabel}
                </p>
                <p className={`text-lg font-bold leading-tight ${i === selected ? 'text-white' : 'text-white/90 group-hover:text-white'}`}>
                  {item.title}
                </p>
                {item.meta && (
                  <p className="text-sm text-white/50 font-medium">
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
