import { useState } from "react";
import Title from "@/components/Title";
import experienceData, { ExperienceType } from "@/data/experience/Main";

export default function Experience() {
    const [index, setIndex] = useState(0);
    const current: ExperienceType = experienceData[index];

    return (
        <>
            <Title>
                Experience & 
                <p className="text-primary">involvement</p>
            </Title>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                <div className="col-span-1 relative">
                    {/* Vertical line */}
                    <div className="hidden lg:block absolute left-[15px] top-2 bottom-2 w-px bg-white/10" />

                    <div className="flex flex-col gap-10">
                        {experienceData.map((item, i) => {
                            const startLabel = item.start.toLocaleString(undefined, { month: "short", year: 'numeric' });
                            const endLabel = item.end ? item.end.toLocaleString(undefined, { month: "short", year: 'numeric' }) : 'PRESENT';
                            return (
                                <button
                                    key={i}
                                    onClick={() => setIndex(i)}
                                    className={`relative pl-12 text-left group w-full transition-all duration-200 ${i === index ? 'opacity-100' : 'opacity-40 hover:opacity-100'}`}>
                                    
                                    {/* Dot */}
                                    <div className="absolute left-0 top-[6px] w-[31px] flex justify-center">
                                        {i === index ? (
                                            <div className="w-3.5 h-3.5 rounded-full bg-primary ring-4 ring-primary/20" />
                                        ) : (
                                            <div className="w-3 h-3 rounded-full border-2 border-white/20 group-hover:border-white/40 bg-neutral-bg" />
                                        )}
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <p className="text-[11px] font-bold tracking-widest text-white/40 uppercase">
                                            {startLabel} — {endLabel}
                                        </p>
                                        <p className={`text-lg font-bold leading-tight ${i === index ? 'text-white' : 'text-white/80 group-hover:text-white'}`}>
                                            {item.title}
                                        </p>
                                        {item.meta && (
                                            <p className="text-sm text-white/30 font-medium">
                                                {item.meta}
                                            </p>
                                        )}
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Description */}
                <div className="col-span-1 lg:col-span-2 p-8 lg:p-10 bg-[#161616] border border-white/5 rounded-3xl shadow-2xl">
                    <div className="flex justify-between items-start mb-8">
                        <div>
                            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-bold tracking-widest text-primary uppercase mb-4">
                                {current.end != null ? 'Past Achievement' : 'Current Focus'}
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-2">{current.title}</h3>
                            {current.meta && <p className="text-xl text-primary font-medium">{current.meta}</p>}
                        </div>
                        {current.icon && (
                            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-white/20">
                                <i className={`fas ${current.icon} text-2xl`}></i>
                            </div>
                        )}
                    </div>

                    <div className="text-white/60 text-lg leading-relaxed space-y-4">
                        {current.description}
                    </div>
                </div>
            </div>
        </>
    );
}