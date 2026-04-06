"use client";
import whatIDoData, { WhatIDoType } from "@/data/what-i-do/Main";
import { useState } from "react";
import Image from "next/image";
import Title from "@/components/Title";


export default function WhatIDo() {
    const d = whatIDoData;
    const [index, setIndex] = useState(0);
    const current = d[index];
    const changeCurrent = (i: number) => setIndex(i);
    const prev = () => setIndex((s) => (s - 1 + d.length) % d.length);
    const next = () => setIndex((s) => (s + 1) % d.length);

    return (
        <>
            <Title>What I Do</Title>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                {/* Left side: Navigation Cards & SVG Overlay */}
                <div className="col-span-1 flex flex-col gap-4 relative">
                    <div className="
                            flex flex-col gap-4
                            lg:max-h-[550px] lg:overflow-y-auto lg:pr-2
                            scrollbar-thin scrollbar-thumb-white/10
                        ">
                        {d.map((wid, id) => (
                            <WhatIDoCard
                                key={id}
                                whatIDo={wid}
                                active={current.title === wid.title}
                                onClick={() => {
                                    changeCurrent(id);
                                }}
                            />
                        ))}
                    </div>

                    {/* Coding SVG Decoration (large screens only) */}
                    <div className="hidden lg:flex mt-8 justify-center items-center opacity-80 group/svg">
                        <div className="animate-float pointer-events-none">
                            <Image
                                src="/assets/svgs/coding.svg"
                                alt="Coding Illustration"
                                width={300}
                                height={300}
                                className="w-full max-w-[220px] h-auto filter invert brightness-200 transition-all duration-300 group-hover/svg:brightness-100"
                                loading="eager"
                            />
                        </div>
                    </div>
                </div>

                {/* Right side: Detailed Description */}
                <div className="
                    col-span-1 lg:col-span-2
                    p-6 lg:p-8
                    min-h-[400px] lg:h-[750px]
                    bg-neutral-bg/50 backdrop-blur-sm
                    border border-white/10 rounded-2xl shadow-2xl
                    flex flex-col relative
                ">
                    <div className="flex items-center gap-4 mb-8 px-2 md:px-8 relative">
                        <div className="p-3 bg-primary/10 rounded-xl text-primary">
                            <i className={`fas ${current.icon} text-2xl`}></i>
                        </div>
                        <h2 className="text-3xl font-bold text-white">{current.title}</h2>
                    </div>

                    {/* Prev/Next controls */}
                    <div className="absolute left-4 top-4 z-30">
                        <button onClick={prev} aria-label="Previous" className="p-2 lg:p-3 rounded-xl bg-gradient-to-br from-white/4 to-white/2 border border-white/6 text-white/90 hover:from-white/6 hover:to-white/4 backdrop-blur-sm shadow-[0_6px_18px_rgba(2,6,23,0.6)] transition-all">
                            <span className="sr-only">Previous</span>
                            <i className="fa-solid fa-chevron-left" />
                        </button>
                    </div>
                    <div className="absolute right-4 top-4 z-30">
                        <button onClick={next} aria-label="Next" className="p-2 lg:p-3 rounded-xl bg-gradient-to-br from-white/4 to-white/2 border border-white/6 text-white/90 hover:from-white/6 hover:to-white/4 backdrop-blur-sm shadow-[0_6px_18px_rgba(2,6,23,0.6)] transition-all">
                            <span className="sr-only">Next</span>
                            <i className="fa-solid fa-chevron-right" />
                        </button>
                    </div>

                    <div className="text-white/80 leading-relaxed">
                        {current.description}
                    </div>
                </div>
            </div>
        </>
    );
}

const WhatIDoCard = ({
    whatIDo,
    active,
    onClick,
}: {
    whatIDo: WhatIDoType;
    active: boolean;
    onClick: () => void;
}) => {
    return (
        <button
            onClick={onClick}
            className={`
                group w-full text-left transition-all duration-300
                p-4 rounded-xl border-2
                ${active
                    ? "bg-primary/10 border-primary shadow-[0_0_20px_rgba(var(--primary-rgb),0.2)]"
                    : "bg-neutral-bg border-white/5 hover:border-white/20 hover:bg-white/5"
                }
                cursor-pointer
            `}
        >
            <div className="flex items-center gap-4">
                <div className={`
                    w-12 h-12 flex items-center justify-center rounded-lg transition-colors
                    ${active ? "bg-primary text-white" : "bg-white/5 text-white/40 group-hover:text-white/60"}
                `}>
                    <i className={`fas ${whatIDo.icon} text-lg`}></i>
                </div>
                <div>
                    <p className={`font-bold transition-colors ${active ? "text-white" : "text-white/60 group-hover:text-white"}`}>
                        {whatIDo.title}
                    </p>
                </div>
            </div>
        </button>
    );
}